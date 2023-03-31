import { writable } from "svelte/store";
import * as Map from "./Map";

export let scrawlInfo = writable({
    title: "",
    author: "",
    link: "",
    date: "",
    checksum: ""
});

export let valid = writable(false);
export let readonly = writable(false);
export let obfuscateAI = writable(false);
export let storyText = writable("");

function get__store(store) : any {
    let $val
    store.subscribe($ => $val = $)()
    return $val
}

export function parseScrawlStory(story : string) {
    try {
        let JSONdata = Map.invisibleToString(story.substring(story.indexOf("\u200b\u200c\ufeff\u2062")+4, story.indexOf("\u2063\u2064\u2061")));
        scrawlInfo.set(JSON.parse(JSONdata));
        sha256sum(story.substring(0, story.indexOf("\u200b\u200c\ufeff\u2062")) + story.substring(story.indexOf("\u2063\u2064\u2061")+3, story.length)).then(checksum => {
            if (get__store(scrawlInfo).checksum == checksum) {
                valid.set(true);
            } else {
                valid.set(false);
            }
        })
    } catch (err) {
        // The JSON was likely malformed. We don't want to do anything in this case.
    }
}

export async function sha256sum(input : string) {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((item) => item.toString(16).padStart(2, "0")).join("");
};

export async function copyToClipboard(text : string) {
    if (window.navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.visibility = "none";

        document.body.prepend(textArea);
        textArea.select();
        try {
            document.execCommand("copy");
        } catch (err) {
            console.log(err);
        } finally {
            textArea.remove();
        }
    }
}