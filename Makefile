panelists:
	conda activate amhn-website && python train_hopfield_people.py _data/panelists.yaml static/models/panelists

organizers:
	conda activate amhn-website && python train_hopfield_people.py _data/organizers.yaml static/models/organizers

speakers:
	conda activate amhn-website && python train_hopfield_people.py _data/speakers.yaml static/models/speakers

deploy: speakers organizeres panelists
	pnpm run deploy