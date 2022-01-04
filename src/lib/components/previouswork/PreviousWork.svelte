<script>
import PreviousWorkItem from "./PreviousWorkItem.svelte";

</script>

<section id="previous-work">
    <h2>Previous Work</h2>

    <PreviousWorkItem
        siteName='WellWork Yoga'
        pictureUrl='/images/previous_sites/wellworkyoga.png'
        description='Site for yoga business in Wordpress'
    />

    <PreviousWorkItem
    siteName="Pat's Stats"
    pictureUrl='/images/previous_sites/patsstats.png'
    description='Football statistics site'
/>
</section>

<style>
    section{
        margin: 8px
    }
</style>