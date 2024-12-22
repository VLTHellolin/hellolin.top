import {
  SiAdobephotoshop,
  SiArchlinux,
  SiCplusplus,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiRust,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from '@icons-pack/react-simple-icons';
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import type React from 'react';

const TechIcon = ({
  color,
  icon,
  text,
}: { color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'; icon?: React.ReactNode; text?: string }) => {
  return (
    <Button disabled disableRipple startContent={icon} color={color} variant='flat'>
      {text}
    </Button>
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
          <TechIcon color='primary' icon={<SiReact />} text='React' />
          <TechIcon color='success' icon={<SiVuedotjs />} text='Vue.js' />
          <TechIcon color='warning' icon={<SiJavascript />} text='Javascript' />
          <TechIcon color='primary' icon={<SiTypescript />} text='Typescript' />
          <TechIcon color='secondary' icon={<SiVite />} text='Vite' />
          <TechIcon color='primary' icon={<SiCplusplus />} text='C++' />
          <TechIcon color='default' icon={<SiRust />} text='Rust' />
          <TechIcon color='danger' icon={<SiGit />} text='Git' />
          <TechIcon color='primary' icon={<SiMysql />} text='MySQL' />
          <TechIcon color='warning' icon={<SiPython />} text='Python' />
          <TechIcon color='primary' icon={<SiArchlinux />} text='Arch Linux' />
          <TechIcon color='primary' icon={<SiAdobephotoshop />} text='Photoshop' />
          <TechIcon color='default' icon={<SiFigma />} text='Figma' />
        </div>
      </CardBody>
    </Card>
  );
};
