import type { Metadata } from 'next';
import { Link } from '@/components/Link';
import { PostCard } from '@/components/PostCard';
import { getRecentPosts } from '@/utils/posts';

export const metadata: Metadata = {
  title: 'Homepage',
};

export default async function Home() {
  const recentPosts = await getRecentPosts();

  return (
    <div className='flex grow flex-col gap-6'>
      <section className='flex flex-col gap-2 border rounded-lg p-6'>
        <div className='flex items-baseline gap-1'>
          <h2 className='text-2xl font-medium'>hellolin</h2>
          <p className='text-sm text-muted-fg'>@VLTHellolin</p>
        </div>
        <div>
          <p className='text-sm text-muted-fg'>
            A full-stack developer, competitive programmer and high-school student based in China, passionate about open-source development, trying to craft simple, modern, and easy-to-use projects.
          </p>
          <p className='mt-2 text-sm text-muted-fg'>
            Enjoy watching anime, playing video games and listening to pop, rock and electronic music. Cultivating interest in doing photography and graphic design.
          </p>
          <p className='mt-2 text-sm text-muted-fg'>
            View my projects <Link href='/projects' decoration>here</Link>, visit my <Link href='https://github.com/VLTHellolin' external decoration>GitHub</Link>, and feel free to reach out
            through <Link href='https://discordapp.com/users/1060072430355370094' external decoration>Discord</Link>, <Link href='https://x.com/VLTHellolin' external decoration>Twitter</Link>, or <code>i@hellolin.top</code>.
          </p>
        </div>
      </section>
      <section className='flex flex-col gap-4'>
        <h2 className='text-2xl font-medium'>Recent Posts</h2>
        <div className='flex flex-col gap-4'>
          {recentPosts.map(post => <PostCard post={post} key={post.title} />)}
        </div>
      </section>
    </div>
  );
}
