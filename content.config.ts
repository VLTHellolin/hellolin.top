import { defineCollection, s } from 'velite';

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
    // auto generated entries
    slug: s.path(),
    metadata: s.metadata(),
    toc: s.toc(),
    code: s.mdx(),
  }).transform(data => ({ ...data, permalink: `/posts/${data.slug}` })),
});

const academicBlog = defineCollection({
  name: 'Academic Blog',
  pattern: 'papers/**/*.md',
  schema: s.object({
    title: s.string(),
    date: s.isodate(),
    tags: s.array(s.string()).optional(),
    // auto generated entries
    slug: s.path(),
    metadata: s.metadata(),
    toc: s.toc(),
    code: s.mdx(),
  }).transform(data => ({ ...data, permalink: `/papers/${data.slug}` })),
});

const authors = defineCollection({
  name: 'Authors',
  pattern: 'authors/**/*.md',
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
      steam: s.string().url().optional(),
      discord: s.string().url().optional(),
      orcid: s.string().url().optional(),
    }).optional(),
    // auto generated entries
    slug: s.path(),
  }).transform(data => ({ ...data, permalink: `/authors/${data.slug}` })),
});

const projects = defineCollection({
  name: 'Projects',
  pattern: 'projects/**/*.md',
  schema: s.object({
    name: s.string(),
    description: s.string(),
    image: s.image().optional(),
    link: s.string().url(),
    archived: s.boolean().optional(),
    tags: s.array(s.string()).optional(),
    // auto generated entries
    slug: s.path(),
  }).transform(data => ({ ...data, permalink: `/projects/${data.slug}` })),
});

export const collections = { blog, academicBlog, authors, projects };
