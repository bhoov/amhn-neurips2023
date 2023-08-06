import * as path from "path"
import * as glob from "glob"
import * as fs from "fs-extra"
import * as yaml from "js-yaml"

export const prerender = true
export const ssr = false
export const trailingSlash = 'always';

const globber = process.env.NODE_ENV === "production" ? glob.default : glob
const fser = process.env.NODE_ENV === "production" ? fs.default : fs
/**
 * Load all data for my website
 * @returns The yaml files converted into a database for generating the website
 */
export async function load() {

    // Load YAMLs
    const fnames = globber.sync(`_data/*.yaml`)
    const fkeys = fnames.map(fname => path.basename(fname, ".yaml"))
    const fileData = await Promise.all(fnames.map(async (fname) => {
        const fdata = await fser.readFile(fname, 'utf8')
        return yaml.load(fdata)
    }))

    const db = fkeys.reduce((acc, fkey, i) => { return { ...acc, [fkey]: fileData[i] } }, {})

    // Load markdown

    // const cfpText = await fetch("_data/cfp.md").then((response) => response.text())
    const cfpText = await fser.readFile("_data/call_for_papers.md", 'utf8')
    // console.log(cfpText)
    db["call_for_papers"] = cfpText
    // Load papers

    return db
}
