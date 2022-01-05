<script lang="ts">
    import type { Service } from "$lib/interfaces/interfaces";

    export let service: Service;
</script>

<h3>{service.title}</h3>
<p>{service.description}</p>