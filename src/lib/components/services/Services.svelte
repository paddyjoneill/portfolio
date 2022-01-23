<script lang="ts">
    import type { Service } from "$lib/interfaces/interfaces";
import ServiceItem from "./ServiceItem.svelte";

    const services: Service[] = [
        {
            icon: '/images/icons/laptop_phone.svg',
            title: 'Responsive Website Design',
            description: 'Websites that look good on Mobile, Tablet or PC.'
        },
        {
            icon: '/images/icons/web.svg',
            title: 'Website Hosting and Setup',
            description: 'We minimise your ongoing hosting and email costs.'
        },
        {
            icon: '/images/icons/search.svg',
            title: 'SEO',
            description: 'Our websites are optimised for good SEO.'
        }
    ]
</script>

<section id="services">
    <h2>Services</h2>
    <div class="services-container">
        {#each services as service}
            <ServiceItem {service} />
        {/each}
    </div>
</section>

<style>
    section{
        margin: 8px;
    }

    .services-container{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
</style>