<script lang="ts">
    import type { Service } from "$lib/interfaces/interfaces";
import ServiceItem from "./ServiceItem.svelte";

    const services: Service[] = [
        {
            icon: '/icon.png',
            title: 'Website Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            icon: '/icon.png',
            title: 'Website Hosting and email Setup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            icon: '/icon.png',
            title: 'SEO',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]
</script>

<section id="services">
    <h2>Services</h2>
    {#each services as service}
        <ServiceItem {service} />
    {/each}
</section>

<style>
    section{
        margin: 8px;
    }
</style>