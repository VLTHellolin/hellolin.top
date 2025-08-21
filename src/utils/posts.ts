'use server';

import type { Authors, Blog } from '@content/index';

export const getAllPosts = async (): Promise<Blog[]> => import('@content/index').then(i => i.blog);
export const getRecentPosts = async (count: number = 5) => (await getAllPosts()).slice(0, count);

export const getAllAuthors = async (): Promise<Authors[]> => import('@content/index').then(i => i.authors);
export const getPostAuthors = async (id: string[]) => (await getAllAuthors()).filter(author => id.includes(author.name));
