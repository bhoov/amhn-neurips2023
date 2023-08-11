<script lang="ts">
	import type { AnyInputs } from '@tensorflow/tfjs';
	import { extent, line, scaleLinear, scaleLog } from 'd3';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	interface MarkerI {
		_t: number;
		info: AnyInputs;
	}
	export let data = [];
	export let markers: MarkerI[] = []; // Timepoints along trajectory, denoted by an index into data
	export let width = 800;
	export let height = 200;

	export let marginWidth = 70;
	export let color = '#194b80';
	export let showVal = true;

	let markerMousedOver;

	$: filtered = data.filter((d) => d !== null);
	$: nNull = data.reduce((acc, d) => (d == null ? acc + 1 : acc), 0);

	let labelX = null;
	let labelY = null;
	function formatLabel(x) {
		return Number(x.toPrecision(5)).toExponential();
	}

	$: y_extent = extent(filtered);
	$: y_scale = scaleLog(y_extent, [height - 15, 15]);

	$: x_scale = scaleLinear([0, data.length], [5, width - marginWidth - 10]);
	$: markerLocs = markers.map((m) => x_scale(m._t));

	const lineGenerator = line<number>(
		(d, i) => {
			const lastX = x_scale(i);
			labelX = lastX;
			return lastX;
		},
		(d) => {
			const lastY = y_scale(d);
			labelY = lastY;
			return lastY;
		}
	);

	function mouseEnterEvent() {
		markerMousedOver = true;
		// console.log("PACKET: ", packet)
	}

	function mouseClickEvent(packet) {
		dispatch('markerclick', {
			info: packet
		});
	}

	function mouseLeaveEvent() {
		markerMousedOver = null;
	}
</script>

<div>
	<svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" preserveAspectRatio=none>
		<g class="line-plot">
			<path d={lineGenerator(filtered)} class="pathLine" style:stroke={color} />
		</g>

		<g class="marker-collection" class:clickable={markerMousedOver != null}>
			{#if markers.length}
				{#each markerLocs as ml, i}
					<g>
						<text
							x={ml}
							y={15}
							text-anchor="middle"
							on:mouseenter={mouseEnterEvent}
							on:mousedown={() => mouseClickEvent({ idx: i, ...markers[i].info })}
							on:mouseleave={mouseLeaveEvent}>🔻</text
						>
						<line x1={ml} x2={ml} y1={15} y2={150} stroke-dasharray="3 5" stroke="black" />
					</g>
				{/each}
			{/if}
		</g>

		{#if showVal && labelX && labelY}
			<text class="label" x={labelX + 5} y={labelY} alignment-baseline="central"
				>{`< ${formatLabel(filtered[filtered.length - 1])}`}</text
			>
		{/if}
	</svg>
</div>

<style lang="css">
	.pathLine {
		fill: none;
		stroke-width: 4px;
	}

	.label {
		font: bold 12px sans-serif;
		fill: black;
	}

	.clickable {
		cursor: pointer;
	}
</style>
