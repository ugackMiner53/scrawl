<script lang="ts">
    import * as Map from "./Map";
    import { scrawlInfo, valid, readonly, storyText, obfuscateAI, sha256sum } from "./Scrawl";

    function scrawlStory() {
        if ($obfuscateAI) {
            $storyText = $storyText.split("").map(char => Object.keys(Map.alphabet).includes(char) ? Array.from(Map.alphabet[char])[Math.floor(Math.random() * (Array.from(Map.alphabet[char]).length-1))] : char).join("");
        }

        $scrawlInfo.date = new Date().toISOString();
        sha256sum($storyText).then((checksum) => {
            $scrawlInfo.checksum = checksum;
        }).finally(() => {
            let invisibleData = "\u200b\u200c\ufeff\u2062" + Map.stringToInvisible(JSON.stringify(Object.values($scrawlInfo))) + "\u2063\u2064\u2061";
            let storyArray = Array.from($storyText);
            storyArray.splice(Math.floor(Math.random() * (storyArray.length-1)), 0, invisibleData);
            $storyText = storyArray.join("");
            $readonly = true;
            $valid = true;
        });
    }

    function aiObfuscateClick() {
        let value = localStorage.getItem("obfuscateAI");
        if (value == null) {
            window.alert("WARNING: The AI Obfuscator will break screen readers and other accessibility tools from working. This warning will not show again.");
        }
        $obfuscateAI = !$obfuscateAI;
        localStorage.setItem("obfuscateAI", $obfuscateAI.toString());
    }
</script>

<div>
    <label for="titleInfo">Title: </label>
    <input type="text" name="Title" id="titleInfo" bind:value={$scrawlInfo.title} readonly={$readonly}>
</div>
<div>
    <label for="authorInfo">Author: </label>
    <input type="text" name="Author" id="authorInfo" bind:value={$scrawlInfo.author} readonly={$readonly}>
</div>
<div>
    <label for="linkInfo">Link: </label>
    {#if $readonly}
    <a target="_blank" href={$scrawlInfo.link}>{$scrawlInfo.link}</a>
    {:else}
    <input type="text" name="Link" id="linkInfo" bind:value={$scrawlInfo.link}>
    {/if}
</div>
{#if $readonly}
<div>
    <label for="dateInfo">Created: </label>
    <input type="date" name="Created" id="dateInfo" value={$scrawlInfo.date.substring(0,10)} readonly={$readonly}>
</div>
<div>
    <p style="color: {$valid ? "lime" : "yellow"};">{$valid ? "Document has not been changed since last Scrawl" : "Document may have changed since last scrawl"}</p>
</div>
{:else}
<div>
    <label for="aiObfuscateBox">Anti-AI Mode: </label>
    <input type="checkbox" name="Obfuscate Text" id="aiObfuscateBox" on:click={aiObfuscateClick}>
</div>
<button id="scrawlButton" on:click={scrawlStory}>Scrawl my story!</button>
{/if}