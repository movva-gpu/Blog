import { json } from "@sveltejs/kit";
import type { RequestHandler } from "../posts/$types";

export const GET: RequestHandler = async () => {
    const categories = await import('./data/categories.json');

    return json({ ...categories.default });
};
