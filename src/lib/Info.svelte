<script lang="ts">
    import { decToInvisible } from "./Map";
    export let readonly = false;
    export let scrawlInfo : {
        title: string,
        author: string,
        link: string,
        date: Date,
        checksum: string
    };

    function scrawlStory() {
        console.log(scrawlInfo);
        let scrawlInfoStr : string = JSON.stringify(scrawlInfo);
    }
</script>

<div>
    <label for="titleInfo">Title: </label>
    <input type="text" name="Title" id="titleInfo" bind:value={scrawlInfo.title} {readonly}>
</div>
<div>
    <label for="authorInfo">Author: </label>
    <input type="text" name="Author" id="authorInfo" bind:value={scrawlInfo.author} {readonly}>
</div>
<div>
    <label for="linkInfo">Link: </label>
    {#if readonly}
    <a target="_blank" href={scrawlInfo.link}>{scrawlInfo.link}</a>
    {:else}
    <input type="text" name="Link" id="linkInfo" bind:value={scrawlInfo.link}>
    {/if}
</div>
<div>
    <label for="dateInfo">Created: </label>
    <input type="date" name="Created" id="dateInfo" bind:value={scrawlInfo.date} {readonly}>
</div>
<div>
    <label for="authorInfo">Checksum: </label>
    <input type="text" name="Checksum" id="checksumInfo" readonly>
</div>

{#if !readonly}
<button id="scrawlButton" on:click={scrawlStory}>Scrawl my story!</button>
{/if}