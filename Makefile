all-models:
	python train_hopfield_people.py _data/speakers.yaml _data/panelists.yaml _data/organizers.yaml static/models/allpeople

panelists:
	python train_hopfield_people.py _data/panelists.yaml static/models/panelists

organizers:
	python train_hopfield_people.py _data/organizers.yaml static/models/organizers

speakers:
	python train_hopfield_people.py _data/speakers.yaml static/models/speakers

OLD-deploy-site:
	npm run build && npm run deploy

OLD-deploy-all: all-models
	npm run build && npm run deploy