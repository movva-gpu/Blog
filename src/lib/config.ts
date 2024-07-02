import { dev } from '$app/environment';

export const title = {
	en: "Danyella's Blog",
	fr: 'Le blog de Danyella'
};

export const description = {
	en: 'A blog to write about everything and nothing at the same time :p',
	fr: 'Un blog pour écrire de tout et rien à la fois :p'
};

export const keywords =
	'blog, danyella, strikann, allenyade, movva, ' +
	'moonlight, movva moonlight, development, javascript, html5, css3, git, ' +
	'github, open source, open-source, typescript, svelte, sveltekit, ' +
	'svelte-kit, blogging, programming, développement web, web development, ' +
	'web, front end, front-end, back end, back-end, full stack, fullstack, ' +
	'full-stack, full-stack, full-stack dev, fullstack dev,' +
	'fullstack developer, fullstack dev, 42';

export const devUrl = 'http://localhost:5173';
export const prodUrl = 'https://blog.danyella.works';
export const url = dev ? devUrl : prodUrl;
