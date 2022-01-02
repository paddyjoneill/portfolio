<script lang="ts">
	import DropdownMenu from "./DropdownMenu.svelte";

	let showDropdown = false;

	const handleHamburgerClick = () => {
		console.log(!showDropdown)
		showDropdown = !showDropdown
	}
</script>

<header>
	<h1>
		<a href="/">PATRICKONEILL.DEV</a>
	</h1>

	<nav>
		<ul class="header-ul">
			<li>
				<a href="/">SERVICES</a>
			</li>
			<li>
				<a href="/">ABOUT</a>
			</li>
			<li>
				<a href="/">CONTACT</a>
			</li>
		</ul>
	</nav>
	<div class="hamburger" on:click={handleHamburgerClick}>
		<span class="bar" />
		<span class="bar" />
		<span class="bar" />
	</div>
</header>
<DropdownMenu
	showDropdown={showDropdown}
/>

<style>
	header {
		display: flex;
		flex-direction: row;
		background-color: rgb(248, 242, 242);
		align-items: center;
		justify-content: space-between;
		height: 48px;
	}

	h1 {
		margin-left: 16px;
		font-size: medium;
		font-weight: 400;
	}

	ul > li {
		display: inline-block;
	}

	ul {
		list-style-type: none;
	}

	li {
		font-size: medium;
		font-weight: 400;
		margin-right: 16px;
	}

	a {
		text-decoration: none;
		color: black;
	}

	.hamburger {
		display: none;
	}

	.bar {
		display: block;
		width: 25px;
		height: 2px;
		margin: 5px auto;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		background-color: #101010;
	}

	@media only screen and (max-width: 640px) {
		.hamburger{
			display: block;
			margin-right: 8px;
		}

		.header-ul{
			display: none;
		}
	}
</style>
