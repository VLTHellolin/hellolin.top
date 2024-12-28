import { Icon } from '@iconify/react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';

const TechIcon = ({ icon, color, text }: { icon: string; color: string; text: string }) => {
  return (
    <Chip className='pl-2' variant='flat' startContent={<Icon icon={icon} color={color} width={16} />}>
      {text}
    </Chip>
  );
};

export const TechCard = () => {
  return (
    <Card className='p-4'>
      <CardHeader>
        <h3 className='text-large text-default-800'>Skills</h3>
      </CardHeader>

      <CardBody>
        <div className='flex flex-row flex-wrap gap-2'>
          <TechIcon icon='simple-icons:react' color='#61DAFB' text='React' />
          <TechIcon icon='simple-icons:vuedotjs' color='#4FC08D' text='Vue.js' />
          <TechIcon icon='simple-icons:nextdotjs' color='#000000' text='Next.js' />
          <TechIcon icon='simple-icons:typescript' color='#3178C6' text='Typescript' />
          <TechIcon icon='simple-icons:cplusplus' color='#00599C' text='C++' />
          <TechIcon icon='simple-icons:rust' color='#000000' text='Rust' />
          <TechIcon icon='simple-icons:mysql' color='#4479A1' text='MySQL' />
          <TechIcon icon='simple-icons:python' color='#3776AB' text='Python' />
          <TechIcon icon='simple-icons:archlinux' color='#1793D1' text='Arch Linux' />
          <TechIcon icon='simple-icons:debian' color='#A81D33' text='Debian' />
        </div>
      </CardBody>
    </Card>
  );
};
