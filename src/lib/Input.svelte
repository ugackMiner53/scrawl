<script lang="ts">
    import * as Map from "./Map";
    import { parseScrawlStory, scrawlInfo, readonly } from "./Scrawl";

    globalThis.a = Map.stringToInvisible;
    globalThis.b = Map.invisibleToString;

    function handleTextChange(event: Event) {
        if ((<HTMLTextAreaElement>event.target).value == "") {
            $scrawlInfo.author = "";
            $scrawlInfo.title = "";
            $scrawlInfo.link = "";
            $scrawlInfo.checksum = "";
        } else if ((<HTMLTextAreaElement>event.target).value.includes("\u200b\u200c\ufeff\u2062"))  {
            $readonly = true;
            parseScrawlStory((<HTMLTextAreaElement>event.target).value);
        } else {
            $readonly = false;
        }
    }
</script>

<textarea name="Story Input" placeholder="Enter a story..." id="storyInput" spellcheck="false" on:emptied={handleTextChange} on:input={handleTextChange} />