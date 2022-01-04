<script lang="ts">
    export let pictureUrl: string;
    export let siteName: string;
    export let description: string;
</script>

<div class="previous-work-item">
    <img class="site-image" src={pictureUrl} alt={siteName}/>
    <h3 class="site-name">{siteName}</h3>
    <p class="description">{description}</p>
</div>


<style>
    .previous-work-item{
        display: flex;
        flex-direction: column;
        width: 480px;
        background-color: rgb(248, 242, 242);
        border: 1px solid black;
        border-radius: 5px;
        margin-bottom: 8px;
    }

    .site-image{
        margin: 4px;
    }

    .site-name{
        margin: 8px;
    }

    .description{
        margin: 8px;
    }
</style>


