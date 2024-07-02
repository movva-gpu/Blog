import { json } from '@sveltejs/kit';
import { getCategoryBySlug } from '$lib/utils';

import type { RequestHandler } from './$types';
import type { Category } from '$lib/types';

export const GET: RequestHandler = async ({ params }) => {
	const categories = (await import('../data/categories.json'))
		.default as Category[];

	const category = getCategoryBySlug(categories, params.slug);

	if (!category) {
		return json({ error: 'Category not found' }, { status: 404 });
	}

	return json({ ...category });
};
