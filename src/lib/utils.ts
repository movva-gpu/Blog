import * as icons from 'lucide-svelte';

import * as simpleIcons from 'simple-icons';

import type { Category } from './types';
import type { SimpleIcon } from 'simple-icons';
import type { SvelteComponent } from 'svelte';

/**
 * Slugifies the input text by converting it to lowercase, replacing spaces with hyphens,
 * removing non-word characters, replacing multiple hyphens with a single hyphen,
 * and removing leading and trailing hyphens.
 *
 * @param {string} text - The text to slugify.
 * @return {string} The slugified text.
 */
export const slugify = (text: string) => {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
};

/**
 * Deslugifies the input text by replacing hyphens with spaces.
 *
 * @param {string} text - The text to deslugify.
 * @return {string} The deslugified text.
 */
export const deslugify = (text: string) => {
	return text.toString().toLowerCase().replace(/-/g, ' ');
};

export const lucidify = (text: string) => {
	return (
		text.charAt(0).toUpperCase() +
		text
			.toString()
			.replace(/-./g, (x) => x[1].toUpperCase())
			.slice(1)
	);
};

export const simpleIconsify = (text: string) => {
	return 'si' + lucidify(text);
};

export const getCategoryBySlug = (categories: Category[], slug: string) => {
	return categories.find((category) => category.slug === slug);
};

/**
 * Retrieves a SimpleIcon component based on the provided icon slug.
 *
 * @param {string} iconSlug - The slug of the icon.
 * @return {string} A string of the SVG code of the icon.
 */
export const getSiIcon = (iconSlug: string): string => {
	return (simpleIcons as unknown as { [key: string]: SimpleIcon })[
		simpleIconsify(iconSlug)
	].svg;
};

/**
 * Retrieves a Lucide icon component based on the provided icon slug.
 *
 * @param {string} iconSlug - The slug of the icon.
 * @return {SvelteComponent} The Lucide icon component.
 */
export const getLucideIcon = (iconSlug: string): SvelteComponent => {
	return (icons as unknown as { [key: string]: SvelteComponent })[
		lucidify(iconSlug)
	];
};

export const getSiIconColor = (iconSlug: string) => {
	return '#' + (simpleIcons as unknown as { [key: string]: SimpleIcon })[
		simpleIconsify(iconSlug)
	].hex;
};
