# AMHN-Neurips2023 Website

> Website code for [Associative Memory and Hopfield Networks Workshop at NeurIPS 2023](amhn.vizhub.aii). Built on [SvelteKit](https://kit.svelte.dev/) and served as a static site.

```
conda env create -f environment.yml
conda activate amhn-website
# pip install -f https://storage.googleapis.com/jax-releases/jax_cuda_releases.html jax[cuda11_pip] # if GPU present
pip install "jax[cpu]" # If no gpu
pip install -r requirements.txt
```

## Frontend Developing

```
npm i
npm run dev
```

All website data lives in the `_data` repository.

- All `NAME.yaml` files are stored under the global database object (explained below) as `data.NAME`
- `papers.bib` contain all related papers mentioned on the website in bibtex, displayed in the order listed.
- All `[NAME].md` markdown files are stored under the global database object as `data.markdown.NAME`
- To add page `NEWROUTE` to the website, edit the file `src/routes/NEWROUTE/+page.svelte`
- We use SvelteKit's built in static adapter as the SSG, serving website data using [`gh-pages`](https://www.npmjs.com/package/gh-pages)


**Global Database**

The global database is exposed to every route on the website through `export let data;` on a given `+page.svelte` route. This object is created in `+layout.server.ts`.

### Deploying

```
make deploy # Manually, `npm run deploy``
```

GitHub has been setup to deploy automatically:

- The `CNAME` file contains the domain name
- `npm run deploy` automatically pushes a `build` directory to the branch `gh-pages`