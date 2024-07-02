import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const posts = await fetch('/api/posts').then((res) => res.json());
	const categories = await fetch('/api/categories').then((res) => res.json());
    
    return { posts: [...posts], categories: [...categories] };
};
