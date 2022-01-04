<script>
	import PreviousWorkItem from './PreviousWorkItem.svelte';
</script>

<section id="previous-work">
	<h2>Previous Work</h2>

	<div class="item-container">
		<PreviousWorkItem
			siteName="WellWork Yoga"
			pictureUrl="/images/previous_sites/wellworkyoga.png"
			description="Site for yoga business in Wordpress"
            url="https://wellwork.yoga"
		/>

		<PreviousWorkItem
			siteName="Pat's Stats"
			pictureUrl="/images/previous_sites/patsstats.png"
			description="Football statistics site"
            url="https://patsstats.co.uk"
		/>
	</div>
</section>

<style>
	section {
		margin: 8px;
	}

    .item-container{
		display: flex;
		flex-wrap: wrap;
        justify-content:space-around
    }
</style>
