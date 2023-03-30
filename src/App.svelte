<script lang="ts">
    import Input from "./lib/Input.svelte";
    import Info from "./lib/Info.svelte";

    let scrawlInfo = {
        title: "",
        author: "",
        link: "",
        date: new Date(),
        checksum: ""
    }

    globalThis.sc = scrawlInfo;

    let readonly = false;
</script>

<main>
    <h1>Scrawl Demo</h1>
    <div class="content">
        <div class="input">
            <Input />
        </div>
        <div class="storyInfo">
            <Info bind:scrawlInfo={scrawlInfo} {readonly} />
        </div>
    </div>
</main>
