<script lang="ts">
import type { NavItem } from "$lib/interfaces/interfaces";

    export let showDropdown: boolean;
    export let navItems: NavItem[];
</script>

<nav class={showDropdown ? 'visible' : 'invisible'}>
	<ul>
        {#each navItems as navItem }
        <li>
            <a href={navItem.href} on:click>{navItem.title}</a>
        </li>
        {/each}
	</ul>
</nav>

<style>
    nav {
        display: flex;
        position: fixed;
        top: 48px;
        width: 100%;
		background-color: rgb(248, 242, 242);
        justify-content: center;
        transition: 0.4s;
        z-index: 10;
    }

    nav.invisible {
        top: -100%;
        z-index: 10;
    }

	ul {
        list-style-type: none;
        margin: 0px auto;
        padding: 0px;
        text-align: center;
        z-index: 10;
	}

    li {
        margin: 12px;
        z-index: 10;
    }

    a {
        text-decoration: none;
        color: black;
        z-index: 10;
    }
</style>
