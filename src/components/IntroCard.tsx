import { SiDiscord, SiGithub, SiGmail, SiSteam, SiX, SiZhihu } from '@icons-pack/react-simple-icons';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Link } from '@nextui-org/link';
import type React from 'react';

const LongSocialButton = ({ href, icon, text }: { href?: string; icon?: React.ReactNode; text?: string }) => {
  return (
    <Button className='min-w-10' as={Link} href={href} target='_blank' startContent={icon} color='primary' variant='shadow' radius='lg'>
      <div className='hidden sm:block'>{text}</div>
    </Button>
  );
};

const SocialButton = ({ href, icon }: { href?: string; icon?: React.ReactNode }) => {
  return (
    <Button className='opacity-90' isIconOnly as={Link} href={href} target='blank' color='default' variant='light' radius='sm' size='sm'>
      {icon}
    </Button>
  );
};

export const IntroCard = () => {
  return (
    <Card className='p-4'>
      <CardHeader className='justify-between'>
        <div className='flex gap-3'>
          <Avatar isBordered size='md' src='avatar.png' />
          <div className='flex flex-col justify-center items-start'>
            <h4 className='text-medium font-semibold text-default-600'>hellolin</h4>
            <h5 className='text-small text-default-500'>@VLTHellolin</h5>
          </div>
        </div>

        <LongSocialButton href='https://github.com/VLTHellolin' icon={<SiGithub />} text='GitHub' />
      </CardHeader>

      <CardBody className='text-small text-default-500'>
        A Frontend Developer, Competitive Programmer and UI/UX enthusiast from China.
        <div className='flex mt-2 gap-1'>
          <Chip size='sm' variant='flat'>
            14 y.o.
          </Chip>
          <Chip size='sm' variant='flat'>
            He/Him
          </Chip>
          <Chip size='sm' variant='flat'>
            ENFP
          </Chip>
          <Chip size='sm' variant='flat'>
            ACG Lover
          </Chip>
        </div>
      </CardBody>

      <CardFooter>
        <div className='flex gap-1 ml-auto'>
          <SocialButton href='https://x.com/VLTHellolin' icon={<SiX size={18} />} />
          <SocialButton href='mailto:i@hellolin.top' icon={<SiGmail size={18} title='Mail' />} />
          <SocialButton href='https://www.zhihu.com/people/hellolin.cf' icon={<SiZhihu size={18} />} />
          <SocialButton href='https://steamcommunity.com/id/hellolin/' icon={<SiSteam size={18} />} />
          <SocialButton href='https://discord.com/users/1060072430355370094' icon={<SiDiscord size={18} />} />
        </div>
      </CardFooter>
    </Card>
  );
};
