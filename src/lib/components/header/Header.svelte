<script lang="ts">
	import DropdownMenu from './DropdownMenu.svelte';

	let showDropdown = false;

	const handleHamburgerClick = () => {
		console.log(!showDropdown);
		showDropdown = !showDropdown;
	};
</script>

<header>
	<h1>
		<a href="/">PATRICKONEILL.DEV</a>
	</h1>

	<nav>
		<ul class="header-ul">
			<li>
				<a href="#services">SERVICES</a>
			</li>
			<li>
				<a href="/">ABOUT</a>
			</li>
			<li>
				<a href="#contact-form">CONTACT</a>
			</li>
		</ul>
	</nav>
	<div class="hamburger" on:click={handleHamburgerClick}>
		<span class="bar" />
		<span class="bar" />
		<span class="bar" />
	</div>
</header>
<DropdownMenu {showDropdown} />

<style>
	header {
		display: flex;
		flex-direction: row;
		background-color: rgb(248, 242, 242);
		align-items: center;
		justify-content: space-between;
		height: 48px;
		z-index: 11;
	}

	h1 {
		margin-left: 16px;
		font-size: medium;
		font-weight: 400;
		z-index: 11;
	}

	ul > li {
		display: inline-block;
		z-index: 11;
	}

	ul {
		list-style-type: none;
		z-index: 11;
	}

	li {
		font-size: medium;
		font-weight: 400;
		margin-right: 16px;
		z-index: 11;
	}

	a {
		text-decoration: none;
		color: black;
		z-index: 11;
	}

	.hamburger {
		display: none;
		z-index: 11;
	}

	.bar {
		display: block;
		width: 25px;
		height: 2px;
		margin: 5px auto;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
		background-color: #101010;
		z-index: 11;
	}

	@media only screen and (max-width: 640px) {
		.hamburger {
			display: block;
			margin-right: 8px;
			z-index: 11;
		}

		.header-ul {
			display: none;
			z-index: 11;
		}
	}
</style>
