<script lang="ts">
	import { description, title } from '$lib/config';

	import type { Category, Post } from '$lib/types';
	import {
		getCategoryBySlug,
		getLucideIcon,
		getSiIcon,
		getSiIconColor
	} from '$lib/utils';
	import dayjs from 'dayjs';
	import { BugIcon } from 'lucide-svelte';

	export let data: { posts: Post[]; categories: Category[] };

	const getCategoryDisplayName = (categorySlug: string) => {
		const categoryObject = getCategoryBySlug(data.categories, categorySlug);
		if (typeof categoryObject?.['display-name'] === 'string') {
			return categoryObject?.['display-name'];
		} else {
			return categoryObject?.['display-name']?.en;
		}
	};

	const getCategoryIcon = (categorySlug: string) => {
		const categoryObject = getCategoryBySlug(data.categories, categorySlug);

		if (!categoryObject) return BugIcon;

		const iconSlug = categoryObject?.['icon-slug'];

		if (!iconSlug) return BugIcon;

		switch (getCategoryIconType(categorySlug)) {
			case 'lucide':
				return getLucideIcon(iconSlug);

			case 'simple-icons':
				return getSiIcon(iconSlug);

			default:
				return BugIcon;
		}

		return BugIcon;
	};

	const getCategoryIconType = (categorySlug: string) => {
		return getCategoryBySlug(data.categories, categorySlug)?.['icon-type'];
	};

	const getCategoryColor = (categorySlug: string) => {
		const category = getCategoryBySlug(data.categories, categorySlug);

		if (!category) return false;

		if (!('color' in category) && 'icon-color' in category)
			return getSiIconColor(category['icon-slug']);
		else if (!('color' in category)) return false;

		return category.color;
	};

	const isCategoryBorder = (categorySlug: string) => {
		const category = getCategoryBySlug(data.categories, categorySlug);

		if (!category) return false;

		return 'color-border' in category ?? false;
	};
</script>

<h1>{title.en}</h1>
<h2>{description.en}</h2>

<div class="blog-wrapper">
	{#each data.posts as post}
		<div class="blogpost">
			<hgroup>
				<h3>
					<a href="/{post.slug}">
						{post.title}
					</a>
				</h3>
				<h4>
					Posted on
					{dayjs(post.posted_at).format('MMMM D, YYYY')}
				</h4>
			</hgroup>
			<p>
				{post.description}
			</p>
			<div class="categories {post.categories.join(' ')}">
				{#each post.categories as category}
					<div
						class="category {category}"
						style="--_color: {getCategoryColor(category)}"
						data-border-mode={isCategoryBorder(category)}
					>
						<p>
							<span class="icon {getCategoryIconType(category)}">
								{#if getCategoryIconType(category) === 'lucide'}
									<svelte:component
										this={getCategoryIcon(category)}
										{...$$props}
									/>
								{/if}
								{#if getCategoryIconType(category) === 'simple-icons'}
									{@html getCategoryIcon(category)}
								{/if}
							</span>
							{getCategoryDisplayName(category)}
						</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.blog-wrapper {
		display: flex;
		gap: var(--size-fluid-4);
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
	}

	.blogpost {
		position: relative;
		min-width: 256px;
		max-height: 43ch;
		height: 480px;
		padding: var(--size-fluid-4);

		background-color: hsl(var(--gray-12-hsl) / 20%);
		border-radius: var(--radius-3);

		& h3 {
			display: block;
			font-size: var(--font-size-5);
			margin-bottom: calc(var(--size-relative-2) - 0.05em);
			line-height: 1.2;
			translate: 0 -0.05em;

			& a {
				color: inherit;
			}
		}
		& h4 {
			display: block;
			line-height: 1.2;
			margin-bottom: var(--size-relative-1);
		}
		& p:not(.category *) {
			width: fit-content;
			margin-inline: unset;
			font-size: var(--font-size-4);
			margin-bottom: var(--size-relative-3);
		}
	}

	.categories {
		position: absolute;
		bottom: var(--size-fluid-4);
		left: var(--size-fluid-4);
		right: var(--size-fluid-4);
		display: flex;
		gap: var(--size-2);
		flex-wrap: wrap;
	}

	.icon {
		aspect-ratio: 1;
		height: var(--size-px-5);
		display: inline-flex;
		align-items: center;

		& svg {
			height: var(--size-px-5);
			width: auto;
			overflow: visible;
		}

		&.simple-icons svg {
			fill: currentColor;
		}
	}

	.category {
		display: flex;
		align-items: center;
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
		background: var(--_color);
		font-weight: bold;
		font-size: var(--font-size-3);
		line-height: 0.95;

		& p {
			display: flex;
			gap: var(--size-2);
			align-items: center;
		}
	}

	.category[data-border-mode='true'] {
		border: 3px solid var(--_color);
		color: var(--_color);
		background: none;
	}
</style>
