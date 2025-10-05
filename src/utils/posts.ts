'use server';

import type { Authors, Blog } from '@/types/content';

export const getAllPosts = async (): Promise<Blog[]> => import('@content/index').then(i => i.blog);
export const getRecentPosts = async (count: number = 5) => (await getAllPosts()).slice(0, count);
export const getPostById = async (id: string) => (await getAllPosts()).find(post => post.slug === id);
export const getAdjacentPosts = async (id: string) => {
  const posts = await getAllPosts();
  const index = posts.findIndex(post => post.slug === id);
  return {
    previous: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
};

export const getAllAuthors = async (): Promise<Authors[]> => import('@content/index').then(i => i.authors);
export const getPostAuthors = async (id: string[]) => (await getAllAuthors()).filter(author => id.includes(author.name));
