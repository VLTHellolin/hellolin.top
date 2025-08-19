import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homepage',
};

export default function Home() {
  return (
    <div className='flex grow flex-col gap-6'>
      <section className='flex flex-col gap-4 border rounded-lg p-6'>
        <div className='flex flex-row items-baseline gap-1'>
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
        </div>
      </section>
      <section className='flex flex-col gap-4'>
        <h2 className='text-2xl font-medium'>Recent Posts</h2>
      </section>
    </div>
  );
}
