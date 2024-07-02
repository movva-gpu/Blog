import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Post, PostMetadata, PostContentType } from '$lib/types';

const getPosts = async (): Promise<Post[]> => {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/**/*.md', {
		eager: true
	});

	for (let path in paths) {
		let postFile = paths[path] as PostContentType | undefined;

		if (!postFile || !('metadata' in postFile)) continue;

		let slug = path.split('/').at(-1)?.replace('.md', '');

		if (!slug) continue;

		let metadata = postFile.metadata;

		if (!metadata) continue;

		if (!metadata.published) {
			continue;
		}

		const post = { slug, ...metadata } satisfies Post;

		posts.push(post);
	}

	const orderedPosts = posts.sort(
		(first, second) => first.posted_at - second.posted_at
	);

	return orderedPosts;
};

export const GET: RequestHandler = async () => {
	const posts = await getPosts();
	console.log(posts);
	return json(posts);
};
