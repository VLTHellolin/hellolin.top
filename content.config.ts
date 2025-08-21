import { defineCollection, s } from 'velite';

const permalinkTransformer = <T extends { slug: string }>(data: T) => ({ ...data, permalink: `/${data.slug}` });
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
  pattern: 'posts/**/*.md',
  schema: s.object({
    title: s.string(),
    date: s.isodate(),
    description: s.string(),
    image: s.image().optional(),
    order: s.number().optional(),
    tags: s.array(s.string()).optional(),
    authors: s.array(s.string()),
    // auto generated entries
    slug: s.path(),
    metadata: s.metadata(),
    toc: s.toc(),
    code: s.mdx(),
  }).transform(permalinkTransformer)
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
    slug: s.path(),
  }).transform(permalinkTransformer)
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
    slug: s.path(),
  }).transform(permalinkTransformer)
    .transform(imageTransformer),
});

export const collections = { blog, authors, projects };
