import { defineCollection, s } from 'velite';

const slugTransformer = <T extends { path: string }>(data: T) => ({ ...data, slug: data.path.split('/').pop() || '' });
const permalinkTransformer = <T extends { path: string }>(data: T) => ({ ...data, permalink: `/${data.path}` });
const imageTransformer = <T extends Record<string, any>>(data: T) => {
  const imageEntries = ['image', 'avatar'];

  for (const entry of imageEntries) {
    if (entry in data) {
      delete data[entry as keyof T].blurWidth;
      delete data[entry as keyof T].blurHeight;
    }
  }

  return data;
};

const blog = defineCollection({
  name: 'Blog',
  pattern: 'posts/**/*.mdx',
  schema: s.object({
    title: s.string(),
    date: s.isodate(),
    description: s.string(),
    image: s.image().optional(),
    order: s.number().optional(),
    tags: s.array(s.string()).optional(),
    authors: s.array(s.string()),
    // auto generated entries
    path: s.path(),
    metadata: s.metadata(),
    toc: s.toc(),
    code: s.mdx(),
    raw: s.raw(), // for feed
  }).transform(slugTransformer)
    .transform(permalinkTransformer)
    .transform(imageTransformer),
});

const authors = defineCollection({
  name: 'Authors',
  pattern: 'authors/**/*.yaml',
  schema: s.object({
    name: s.string(),
    avatar: s.image().optional(),
    pronouns: s.string().optional(),
    bio: s.string().optional(),
    contacts: s.object({
      website: s.string().url().optional(),
      email: s.string().email().optional(),
      github: s.string().url().optional(),
      twitter: s.string().url().optional(),
    }).optional(),
    // auto generated entries
    path: s.path(),
  }).transform(slugTransformer)
    .transform(permalinkTransformer)
    .transform(imageTransformer),
});

const projects = defineCollection({
  name: 'Projects',
  pattern: 'projects/**/*.yaml',
  schema: s.object({
    name: s.string(),
    description: s.string(),
    image: s.image().optional(),
    link: s.string().url(),
    archived: s.boolean().optional(),
    tags: s.array(s.string()).optional(),
    // auto generated entries
    path: s.path(),
  }).transform(slugTransformer)
    .transform(permalinkTransformer)
    .transform(imageTransformer),
});

export const collections = { blog, authors, projects };
