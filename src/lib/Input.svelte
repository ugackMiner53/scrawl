<script lang="ts">
    import * as Map from "./Map";

    globalThis.a = Map.decToInvisible;
    globalThis.b = Map.invisibleToDec;

    function handleTextChange(event: Event) {
        if ((<HTMLTextAreaElement>event.target).textContent.startsWith("\u200b\u200c"))  {
            console.log()
        }
    }
</script>

<textarea name="Story Input" placeholder="Enter a story..." id="storyInput" on:change={handleTextChange} />