panelists:
	python train_hopfield_people.py _data/panelists.yaml static/models/panelists

organizers:
	python train_hopfield_people.py _data/organizers.yaml static/models/organizers

speakers:
	python train_hopfield_people.py _data/speakers.yaml static/models/speakers

models: panelists organizers speakers

deploy: models
	pnpm run deploy