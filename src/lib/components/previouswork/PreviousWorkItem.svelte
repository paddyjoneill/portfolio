<script lang="ts">
    import {fade, slide} from 'svelte/transition'

    export let pictureUrl: string;
    export let siteName: string;
    export let description: string;
    export let url: string;

    let showOverlay = false

    const mouseOver = () => showOverlay = true
    const mouseLeave = () => showOverlay = false

</script>

<div class="previous-work-item-container" on:mouseover={mouseOver} on:focus={mouseOver} on:mouseleave={mouseLeave} >
    <div class="previous-work-item">
        <img class="site-image" src={pictureUrl} alt={siteName}/>
        <h3 class="site-name">{siteName}</h3>
    </div>
    {#if showOverlay}
    <div transition:fade class={showOverlay ? "overlay" : "no-overlay"}>
        <p transition:slide class={showOverlay ? "description" : "description-inactive"}>{description}</p>
        <p transition:slide class={showOverlay ? "link" : "link-inactive"}><a href={url}>Visit Site</a></p>
    </div>
    {/if}

</div>


<style>
    .previous-work-item-container{
        display: grid;
        /* width: 400px; */
        /* width: 45%; */
        max-width: 600px;
        min-width: 300px;   
        flex-grow: 1;
        margin: 8px;
        border-radius: 3px;
        /* transition: transform 0.5s; */
        box-shadow: 6px 6px 4px 4px rgba(25,25,25,0.5);
    }

    .previous-work-item{
        grid-area: 1/1;
        display: flex;
        flex-direction: column;
        /* width: 400px; */
        /* flex-grow: 1; */
        background-color: rgb(248, 242, 242);
    }

    .site-image{
        /* margin: 4px; */
        width: 100%;
    }

    .site-name{
        margin: 8px;
        font-weight: 400;
    }

    .overlay{
        grid-area: 1/1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.7);
        /* width: 400px; */
        width: 100%;
        /* max-width: 600px;
        min-width: 300px;   
        flex-grow: 1; */
        border-radius: 3px;
    }

    .no-overlay{
        display: none;
    }

    .description{
        margin: 8px;
        color: white;
    }

    .link a{
        color: white;
        text-decoration: none;
    }

</style>


