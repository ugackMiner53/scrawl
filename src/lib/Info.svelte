<script lang="ts">
    import * as Map from "./Map";
    import { scrawlInfo, valid, sha256sum, readonly, copyToClipboard } from "./Scrawl";

    function scrawlStory() {
        console.log(scrawlInfo);
        $scrawlInfo.date = new Date().toISOString();
        sha256sum((<HTMLTextAreaElement>document.getElementById("storyInput")).value).then((checksum) => {
            $scrawlInfo.checksum = checksum;
        }).finally(() => {
            let invisibleData = "\u200b\u200c\ufeff\u2062" + Map.stringToInvisible(JSON.stringify($scrawlInfo)) + "\u2063\u2064\u2061";
            // Replace this with an insertion into the text
            copyToClipboard(invisibleData);
        });
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
{/if}

{#if !$readonly}
<button id="scrawlButton" on:click={scrawlStory}>Scrawl my story!</button>
{/if}