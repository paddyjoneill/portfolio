<script lang="ts">
	import PreviousWorkItem from './PreviousWorkItem.svelte';
    import type {Site} from '$lib/interfaces/interfaces'

    const sites: Site[] = [
        {
            siteName: "WellWork Yoga",
			pictureUrl: "/images/previous_sites/wellworkyoga.png",
			description: "Site for yoga business in Wordpress",
            url: "https://wellwork.yoga",
        },
        {
			siteName: "Pat's Stats",
			pictureUrl: "/images/previous_sites/patsstats.png",
			description: "Football statistics site",
            url: "https://patsstats.co.uk",
        }
    ]
</script>

<section id="previous-work">
	<h2>Previous Work</h2>

	<div class="item-container">
        {#each sites as site}
            <PreviousWorkItem
                siteName={site.siteName}
                pictureUrl={site.pictureUrl}
                description={site.description}
                url={site.url}
            />
        {/each}
	</div>
</section>

<style>
	section {
		margin: 8px;
	}

    .item-container{
		display: flex;
		flex-wrap: wrap;
        justify-content:space-around;
    }
</style>
