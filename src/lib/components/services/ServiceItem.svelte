<script lang="ts">
    import type { Service } from "$lib/interfaces/interfaces";

    export let service: Service;
</script>

<div class="service-item">
    <h3>{service.title}</h3>
    <div class="service-body">
        <img src={service.icon} alt={service.title}>
        <p>{service.description}</p>
    </div>
</div>

<style>
    .service-item{
        margin-top: 12px;
        border: black 1px solid;
        background-color: rgb(248, 242, 242);
        min-width: 300px;
        width: 300px;
    }

    .service-body{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    h3{
        margin: 8px;
    }

    img{
        height: 48px;
        margin: 0px 12px;
    }
</style>