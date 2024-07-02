import { json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const categories = await import('./data/categories.json');

	return json({ ...categories.default });
};
