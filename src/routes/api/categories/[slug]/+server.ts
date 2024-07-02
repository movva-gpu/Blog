import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { findCategory } from "$lib/utils";
import type { Category } from "$lib/types";

export const GET: RequestHandler = async ({ params }) => {
    const categories =(await import('../data/categories.json'))
        .default as Category[];

    const category = findCategory(categories, params.slug);

    return json({ ...category });
};
