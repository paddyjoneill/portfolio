<script lang="ts">
    import type { Service } from "$lib/interfaces/interfaces";

    export let service: Service;
</script>

<img src={service.icon} alt={service.title}>
<h3>{service.title}</h3>
<p>{service.description}</p>