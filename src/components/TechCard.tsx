import {
  SiAdobephotoshop,
  SiArchlinux,
  SiCplusplus,
  SiGit,
  SiMysql,
  SiPython,
  SiReact,
  SiRust,
  SiTypescript,
  SiVuedotjs,
} from '@icons-pack/react-simple-icons';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import type React from 'react';

const TechIcon = ({ icon, text }: { icon?: React.ReactNode; text?: string }) => {
  return (
    <Chip className='pl-2' variant='flat' startContent={icon}>
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
          <TechIcon icon={<SiReact color='default' size={16} />} text='React' />
          <TechIcon icon={<SiVuedotjs color='default' size={16} />} text='Vue.js' />
          <TechIcon icon={<SiTypescript color='default' size={16} />} text='Typescript' />
          <TechIcon icon={<SiCplusplus color='default' size={16} />} text='C++' />
          <TechIcon icon={<SiRust color='default' size={16} />} text='Rust' />
          <TechIcon icon={<SiGit color='default' size={16} />} text='Git' />
          <TechIcon icon={<SiMysql color='default' size={16} />} text='MySQL' />
          <TechIcon icon={<SiPython color='default' size={16} />} text='Python' />
          <TechIcon icon={<SiArchlinux color='default' size={16} />} text='Arch Linux' />
          <TechIcon icon={<SiAdobephotoshop color='default' size={16} />} text='Photoshop' />
        </div>
      </CardBody>
    </Card>
  );
};
