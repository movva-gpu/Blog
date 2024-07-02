export type PostContentType = {
	default?: object;
	metadata?: PostMetadata;
	[value: string]: any;
};

export type PostMetadata = {
	title: string;
	posted_at: number;
	description: string;
	categories: string[];
	published: boolean;
};

export type Post = { slug: string } & PostMetadata;

type BaseCategory = {
	slug: string;
	'display-name': string | { en: string; fr: string };
	'icon-type': 'lucide' | 'simple-icons';
	'icon-slug': string;
	'color-border'?: boolean;
	color: string;
};

type CategoryWithIconColor = Omit<BaseCategory, 'color'> & {
	'icon-color': true;
};

export type Category = BaseCategory | CategoryWithIconColor;
