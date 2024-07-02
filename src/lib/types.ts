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

/** @todo Temporary, remove */
export type Categories = 'web' | 'frontend' | 'backend' | 'school' | 'svelte';

type BaseCategory = {
	slug: string;
	'display-name': string | { en: string; fr: string };
	'icon-type': string;
	'icon-slug': string;
	'color-border'?: boolean;
  }
  
  type CategoryWithColor = BaseCategory & {
	color: string;
  }
  
  type CategoryWithIconColor = Omit<BaseCategory, 'color'> & {
	'icon-color': true;
  }
  
  export type Category = CategoryWithColor | CategoryWithIconColor;
