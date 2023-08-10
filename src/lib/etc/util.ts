// import * as d3 from "d3";

// export type D3Sel = d3.Selection<any, any, any, any>

let the_unique_id_counter = 0;
export function simpleUId({prefix = ''}): string {
    the_unique_id_counter += 1;
    return prefix + the_unique_id_counter;
}

export interface RepeatedResubmitterI {
    startRepeater: () => void
    killHandle: () => void
    setDelay: (v: number) => void
}

/**
  * Repeatedly resubmit an (asynchronous function) `f` with some delay and some maxCount if desired
  */
export function repeatedResubmit(f, delay = 100, maxCount = null):RepeatedResubmitterI {
    let n = 0
    let _killLoop = false
    let tid

    const repeater = async () => {
        const out = await f()
        n += 1
        if (!_killLoop && ((maxCount == null) || (n < maxCount))) {
            tid = setTimeout(repeater, delay)
        }
    }
    function killHandle() {
        _killLoop = true
        clearTimeout(tid)
    }
    function startRepeater() {
        _killLoop = false
        repeater()
    }

    function setDelay(v) {
        delay = v
    }
    return {startRepeater, killHandle, setDelay}
}

export class Transforms {
    static translate(x, y):string {
        return `translate(${x},${y})`
    }

    static rotate(deg):string {
        return `rotate(${deg})`
    }
}

// /**
//  * From https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
//  *
//  * Copy specified `text` to clipboard
//  */
// export function copyToClipboard(text:string) {
//     var dummy = document.createElement("textarea");
//     // to avoid breaking orgain page when copying more words
//     // cant copy when adding below this code
//     document.body.appendChild(dummy);
//     //Be careful if you use textarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
//     d3.select(dummy).attr('value', text);
//     dummy.value = text
//     dummy.select();
//     console.log(dummy);
//     document.execCommand("copy");
//     document.body.removeChild(dummy);
// }
