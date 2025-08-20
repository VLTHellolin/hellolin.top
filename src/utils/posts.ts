'use server';

import type { Blog } from '@content/index';

export const getAllPosts = async (): Promise<Blog[]> => import('@content/index').then(i => i.blog);

export const getRecentPosts = async (count: number = 5) => (await getAllPosts()).slice(0, count);
