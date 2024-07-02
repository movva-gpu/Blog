import type { Category } from "./types";

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

export const deslugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/-/g, ' ');
};

export const findCategory = (categories: Category[], slug: string) => {
    return categories.find((category) => category.slug === slug);
};
