<script lang="ts">
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
    <div class={showOverlay ? "overlay" : "no-overlay"}>
        <p class={showOverlay ? "description" : "description-inactive"}>{description}</p>
        <p class={showOverlay ? "link" : "link-inactive"}><a href={url}>Visit Site</a></p>
    </div>

</div>


<style>
    .previous-work-item-container{
        display: grid;
        width: 480px;
        margin: 8px;
    }

    .previous-work-item{
        grid-area: 1/1;
        display: flex;
        flex-direction: column;
        width: 480px;
        background-color: rgb(248, 242, 242);
        margin-bottom: 8px;
    }

    .site-image{
        margin: 4px;
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
        width: 480px;
        margin-bottom: 8px;
    }

    .no-overlay{
        display: none;
    }

    .description{
        margin: 8px;
        color: white;
        transition: 0.4s;
    }

    .description-inactive{
        margin-bottom: 24px;
    }

    .link a{
        color: white;
        text-decoration: none;
        transition: 0.4s;
    }

    .link-inactive a{
        margin-top: 24px;
    }

</style>


