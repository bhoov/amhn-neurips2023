all-models:
	python train_hopfield_people.py _data/speakers.yaml _data/panelists.yaml _data/organizers.yaml static/models/allpeople

panelists:
	python train_hopfield_people.py _data/panelists.yaml static/models/panelists

organizers:
	python train_hopfield_people.py _data/organizers.yaml static/models/organizers

speakers:
	python train_hopfield_people.py _data/speakers.yaml static/models/speakers

deploy-site:
	pnpm run build && pnpm run deploy

deploy: all-models
	pnpm run build && pnpm run deploy