export type PostContentType = {
	default?: object;
	metadata?: PostMetadata;
	[value: string]: any;
};

export type PostMetadata = {
	title: string;
	posted_at: number;
	description: string;
	tags: Categories[];
	published: boolean;
};

export type Post = { slug: string } & PostMetadata;

export type Categories = 'web' | 'frontend' | 'backend' | 'school' | 'svelte';
