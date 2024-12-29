import { Icon } from '@iconify/react';
import { Link } from '@nextui-org/link';
import { motion } from 'motion/react';

const SingleLink = ({ delay, href, text }: { delay: number; href: string; text: string }) => {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay, duration: 0.6, ease: 'easeOut' }}>
      <motion.div initial={{ opacity: 0.7 }} whileHover={{ opacity: 0.9 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
        <Link color='foreground' isBlock isExternal showAnchorIcon anchorIcon={<Icon icon='material-symbols:arrow-forward-rounded' />} href={href}>
          {text}&nbsp;
        </Link>
      </motion.div>
    </motion.div>
  );
};

export const Links = () => {
  return (
    <div className='flex flex-row gap-2 justify-center'>
      <SingleLink delay={0.4} href='https://blog.hellolin.top' text='Blog' />
      <SingleLink delay={0.5} href='https://cloud.hellolin.top' text='Drive' />
      <SingleLink delay={0.6} href='https://stat.hellolin.top' text='Status' />
    </div>
  );
};
