<script lang="ts">
    import Input from "./lib/Input.svelte";
    import Info from "./lib/Info.svelte";
    import { scrawlInfo } from "./lib/Scrawl";

    globalThis.sc = scrawlInfo;

</script>

<main>
    <h1>Scrawl Demo</h1>
    <div class="content">
        <div class="input">
            <Input />
        </div>
        <div class="storyInfo">
            <Info />
        </div>
    </div>
</main>
