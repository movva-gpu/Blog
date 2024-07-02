<script lang="ts">
	import { title, url } from '$lib/config';
	import { aboutPage, homePage } from '$lib/lang/en';

	export let delayBeforeHeaderTransition = 30;

	const headerTransition = () => {
		if (window.scrollY > 0 + delayBeforeHeaderTransition) {
			document.querySelector('header')?.classList.add('sticky');
		} else {
			document.querySelector('header')?.classList.remove('sticky');
		}
	};
</script>

<svelte:window
	on:scroll={headerTransition}
	on:loadeddata={headerTransition}
	on:load={headerTransition}
/>

<header>
	<a href={url} class="home">
		<h3 class="header__title title-gradient">{title.en}</h3>
	</a>
	<nav>
		<a href="{url}/home">{homePage.title}</a>
		<a href="{url}/about">{aboutPage.title}</a>
		<a href="{url}/RSS" target="_blank">RSS</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-inline: auto;
		padding: var(--size-8);
		width: 100%;

		position: sticky;
		top: 0;
		border-radius: 0;
		border: 0 solid transparent;

		transition:
			opacity 667ms linear,
			background-color 667ms linear,
			border-radius 667ms linear,
			border-color 667ms linear,
			border-width 667ms linear,
			top 1s ease,
			padding 1s ease,
			width 1s ease;

		&::after {
			content: '';
			display: block;
			position: absolute;
			inset: 0;
			opacity: 0;
			background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
			z-index: -1;
			backdrop-filter: blur(0px);
			border-radius: 0;

			transition: inherit;
		}

		&.sticky {
			top: var(--size-fluid-2);
			width: calc(100% - var(--size-fluid-4));
			background-color: hsl(var(--gray-0-hsl) / 30%);
			border-radius: calc(2em + var(--size-8));
			padding-inline: var(--size-8);
			padding-block: var(--size-5);
			border: var(--border-size-2) solid hsl(var(--gray-0-hsl) / 40%);
			backdrop-filter: blur(8px);

			&::after {
				opacity: 0.3;
				border-radius: inherit;
			}

			& .header__title {
				color: white;
				text-shadow: 0 4px 8px hsl(var(--gray-12-hsl) / 50%);
			}

			& a:not(.home) {
				text-shadow: 0 4px 8px hsl(var(--gray-12-hsl) / 50%);

				&::after {
					box-shadow:
						0 0 8px currentColor,
						0 4px 8px hsl(var(--gray-12-hsl) / 50%);
				}
			}
		}
	}

	.header__title {
		font-size: calc(var(--font-size-fluid-2) - 0.1em);
		font-family: var(--ff-serif);
		font-weight: 800;
		line-height: 1.5;

		transition:
			color 667ms linear,
			text-shadow 667ms linear;
	}

	a {
		text-decoration: none;
	}

	a:not(.home) {
		display: inline-block;
		position: relative;
		width: fit-content;

		color: inherit;

		overflow-x: clip;

		transition: text-shadow 667ms linear;

		&::after {
			content: '';
			display: block;

			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 2px;
			width: 100%;

			background-color: currentColor;

			border-radius: max(1000vw, 1000vh);

			scale: -100% 100%;
			translate: 25% 0%;
			transform-origin: right;

			transition:
				scale 1s ease,
				transform-origin 100ms ease,
				translate 0s 750ms,
				box-shadow 333ms linear;

			box-shadow: 0 0 0 currentColor;
		}

		&:hover::after {
			scale: 100% 100%;
			translate: 0 0;
			transform-origin: left;

			transition:
				scale 667ms ease,
				box-shadow 333ms linear;

			box-shadow: 0 0 8px currentColor;
		}
	}
</style>
