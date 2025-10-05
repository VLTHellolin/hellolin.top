import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXContent } from '@/components/MDXContent';
import { PostPagination } from '@/components/PostPagination';
import { Toc } from '@/components/Toc';
import { getAdjacentPosts, getAllPosts, getPostById } from '@/utils/posts';

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map(post => ({ id: post.slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = (await params);
  const post = await getPostById(id);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    publisher: post.authors.join(' '),
  };
};

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);
  const { previous, next } = await getAdjacentPosts(id);

  if (!post) {
    return notFound();
  }

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col gap-6'>
        <article className='prose'>
          <MDXContent code={post.code} />
        </article>
        <PostPagination previous={previous} next={next} />
      </div>
      <Toc toc={post.toc} />
    </div>
  );
}
