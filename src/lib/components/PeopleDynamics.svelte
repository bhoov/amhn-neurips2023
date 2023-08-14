<script lang="ts">
	import { TFJSInterface } from "$lib/etc/tfjsHelpers";
	import * as tf from "@tensorflow/tfjs";
	import { onMount } from "svelte";
	import { repeatedResubmit } from "$lib/etc/util";
	import type { RepeatedResubmitterI } from "$lib/etc/util";
	import { pathJoin } from "$lib/etc/pathJoin";
	import * as R from "ramda";
	import * as d3 from "d3";
	import EndlessLinegraph from "./EndlessLinegraph.svelte";
	// import Select from "svelte-select";

	interface PersonI {
		name: string;
		headshot: string;
		blurb: string;
		affiliations: string[];
		proj2d: [number, number];
	}

	interface PeopleConfigI {
		Nsamples: number;
		img_size: [number, number, number];
		model_dir: string;
		nelements: number;
		people: PersonI[];
	}

	export let configDir: string;
	export let config: PeopleConfigI;
	export let svgWidth = 600;
	export let svgHeight = 400;
	export let svgPadding = 0.1; // Frac padding (relative to pixels) on each side
	export let lineGraphLen = 500;
	export let pauseWhenNotOnScreen = false;

	let container: HTMLDivElement;
	let scrollY: number = 0;
	let innerHeight: number = 0;
	$: scrollBottom = scrollY + innerHeight;

	$: {
		if (container != null && pauseWhenNotOnScreen) {
			// console.log("bottom", scrollBottom);
			// console.log("el", container.offsetTop);
			if (scrollBottom > container.offsetTop + (4110 - 3807)) {
				play();
			} else {
				stop();
			}
		}
	}

	$: minX = config.people.reduce((acc, x) => R.min(acc, x.proj2d[0]), Infinity);
	$: maxX = config.people.reduce(
		(acc, x) => R.max(acc, x.proj2d[0]),
		-Infinity
	);
	$: minY = config.people.reduce((acc, x) => R.min(acc, x.proj2d[1]), Infinity);
	$: maxY = config.people.reduce(
		(acc, x) => R.max(acc, x.proj2d[1]),
		-Infinity
	);

	$: xRange = [minX, maxX];
	$: yRange = [minY, maxY];

	$: xPad = svgPadding * svgWidth;
	$: yPad = svgPadding * svgHeight;
	$: xPxRange = [xPad, svgWidth - xPad];
	$: yPxRange = [svgHeight - yPad, yPad];

	$: xScale = d3.scaleLinear().domain(xRange).range(xPxRange);
	$: yScale = d3.scaleLinear().domain(yRange).range(yPxRange);

	// Internal state
	let waitingOnModel = false;
	let imgCanvas: HTMLCanvasElement;
	let hiddenImage: HTMLImageElement;
	let graphModel;
	let modelProgress = 0;
	let repeater;
	let computeDelay = 10;
	let isMounted = false;

	// Model config and inputs
	$: IMGSIZE = config.nelements;
	$: IMGSHAPE = [config.img_size[1], config.img_size[0], config.img_size[2]];
	$: img = tf.ones([IMGSIZE]).cast("float32").mul(0.6).bufferSync();
	let selectedLabel = 0;
	$: selectedPerson = config.people[selectedLabel];
	$: label = tf.tensor(selectedLabel).cast("int32").bufferSync();
	let alpha = tf.tensor(0.0013).cast("float32").bufferSync();
	let isPlaying = false;

	function play() {
		if (!isPlaying) {
			console.log("playing");
			repeater && repeater.startRepeater();
			isPlaying = true;
		}
	}

	function stop() {
		if (isPlaying) {
			console.log("stopping");
			repeater && repeater.killHandle();
			isPlaying = false;
			manualLoadImage();
		}
	}

	let trackerLoc = [0, 0];
	let energies: number[] = [];

	$: {
		console.log(selectedLabel);
		if (!isPlaying) {
			manualLoadImage();
		}
	}

	function manualLoadImage() {
		if (isMounted) {
			hiddenImage.src = pathJoin([
				"img/headshots/128x170",
				selectedPerson.headshot,
			]);
			hiddenImage.onload = () => {
				img.values = tf.browser.fromPixels(hiddenImage).div(255).dataSync();
				tf.browser.toPixels(
					img.toTensor().reshape([170, 128, 3]) as tf.Tensor3D,
					imgCanvas
				);
				hiddenImage.onload = () => {};
			};
		}
	}

	function reloadModel() {
		waitingOnModel = true;
		graphModel = tf.loadGraphModel(
			pathJoin([configDir, config.model_dir, "model.json"]),
			{
				onProgress: (p) => (modelProgress = Math.round(p * 100)),
			}
		);
		graphModel.then(async (model) => {
			const modelHelper = TFJSInterface(model, ["x2", "energy", "proj_x2"]);
			// TFJS has some weird ordering tricks. Standardize inside of the helper
			waitingOnModel = false;
			async function step() {
				tf.engine().startScope();
				const output = modelHelper.predict([
					img.toTensor(),
					label.toTensor(),
					alpha.toTensor(),
				]);

				img.values = output.x2.dataSync() as Float32Array;
				const px2 = output.proj_x2.dataSync();
				trackerLoc = [px2[0], px2[1]];

				const energy = await output.energy.data();
				energies = [...energies.slice(-lineGraphLen), energy[0]];
				tf.engine().endScope();
				tf.browser.toPixels(
					img.toTensor().reshape([170, 128, 3]) as tf.Tensor3D,
					imgCanvas
				);
				return true;
			}
			repeater = repeatedResubmit(step, computeDelay);
			play();
		});
	}

	onMount(() => {
		console.log(" mounted --- ");
		reloadModel();
		tf.browser
			.toPixels(img.toTensor().reshape(IMGSHAPE) as tf.Tensor3D, imgCanvas)
			.then(() => {
				console.log("Rendered?");
			});
		isMounted = true;
	});
</script>

<div class="big-container" bind:this={container}>
	<div class="small-select mb-4">
		<div class="text-sm italic mb-2">Select a label</div>
		<select
			name="person-selector"
			class="mb-2"
			id=""
			bind:value={selectedLabel}
		>
			{#each config.people as person, i}
				<option value={i}>
					<div>
						{person.name}
					</div>
				</option>
			{/each}
		</select>
	</div>
	<div class="people-list">
		<div class="text-sm italic mb-2">Select a label</div>
		{#each config.people as person, i}
			<div
				class="person"
				class:active={selectedLabel == i}
				on:click={() => {
					selectedLabel = i;
				}}
			>
				<div>
					{person.name}
				</div>
				<!-- <div class="ml-3 text-gray-400 affiliation">
					{#each person.affiliations as affiliation, j}
						{#if j != 0} <span class="mx-0.5">&#x2022;</span> {/if}
						<span class="text-sm">{affiliation} </span>
					{/each}
				</div> -->
			</div>
		{/each}
	</div>
	<div class="person-headshot">
		<div class="text-sm italic mb-2">Watch dynamics evolve</div>
		<canvas
			id="img"
			class="w-full border-black border-2"
			bind:this={imgCanvas}
			style=""
		/>
	</div>
	<div class="energy-linegraph">
		<h3 class="text-md">Energy</h3>
		<div style="height:100%;">
			<EndlessLinegraph
				data={energies}
				showVal={false}
				height={400}
				color="#ffffff"
			/>
		</div>
	</div>
	<div class="pca-container" style="width:100%;">
		<div class="pca-landscape border-2 border-black rounded-sm p-2">
			<h3 class="mb-2 font-medium text-md">
				PCA-projected dynamic state on energy landscape
			</h3>
			<svg
				viewBox={`0 0 ${svgWidth} ${svgHeight}`}
				class="my-4"
				width="100%"
				preserveAspectRatio="none"
			>
				{#each config.people as person, i}
					<g
						transform={`translate(${xScale(person.proj2d[0])}, ${yScale(
							person.proj2d[1]
						)})`}
						on:click={() => {
							selectedLabel = i;
						}}
					>
						<circle class="person-marker" cx="0" cy="0" r="5" />
						<text
							x={0}
							y={0}
							fill={i == selectedLabel ? "white" : "#b8bbbfaa"}
							font-weight={i == selectedLabel ? "semibold" : "medium"}
							text-anchor="middle"
							font-size="1rem"
							dy="18"
							dominant-baseline="middle"
							>{person.name.split(" ").slice(-1)}</text
						>
					</g>
				{/each}
				<circle
					cx={xScale(trackerLoc[0])}
					cy={yScale(trackerLoc[1])}
					r="8"
					fill="white"
					stroke="white"
				/>
			</svg>
		</div>
	</div>
</div>
<!-- <button
				on:click={play}
				class="rounded bg-gray-100 py-1 px-2 text-black"
				class:clicked={isPlaying}>▶️ Play</button
			>
			<button
				on:click={stop}
				class="bg-gray-100 rounded py-1 px-2 text-black"
				class:clicked={!isPlaying}>⏹️ Stop</button
			> -->
<img src="//:0" alt="hidden" style="display:none;" bind:this={hiddenImage} />

<svelte:window bind:scrollY bind:innerHeight />

<style lang="scss">
	.person-col {
		width: 100%;
	}

	.person-marker {
		stroke: white;
		fill: white;
	}

	.person {
		flex-basis: max-content;
	}

	.pca-landscape {
	}

	.person-energy {
		grid-template-columns: 1fr 3fr;
	}

	.container {
		grid-template-columns: 1fr 200px 400px;
	}

	.clicked {
		@apply bg-gray-400 text-gray-200;
	}

	.big-container {
		@apply grid grid-cols-12 grid-rows-6 gap-4;
		place-content: center;
	}

	.people-list {
		@apply col-start-1 col-end-4 row-start-1 row-end-7;
	}

	.person {
		@apply self-start bg-gray-600 text-white py-3 px-5 shadow-inner;
		line-height: 1rem;
	}

	.person-headshot {
		@apply col-start-4 col-end-7 row-start-1 row-end-3;
		width: 200px;
	}

	.energy-linegraph {
		@apply border-2 border-black rounded-sm p-2 row-start-1 row-end-3 col-start-7 col-end-13;
		height: 100%;
	}

	.pca-container {
		@apply col-start-4 col-end-13 row-start-3 row-end-7;
	}

	.active {
		@apply bg-white text-gray-500;
	}

	.clickable {
		cursor: pointer;
	}

	.small-select {
		display: none;
	}

	@media only screen and (max-width: 768px) {
		.big-container {
			display: block;
			width: 90vw;
		}

		.people-list {
			display: none;
		}

		.small-select {
			display: inline;
		}

		select {
			color: black;
		}
	}
</style>
