import { useThemeStore } from '@/hooks/useTheme';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import GitHubCalendar from 'react-github-calendar';

export const ProjectCard = () => {
  const theme = useThemeStore(e => e.theme);

  return (
    <Card className='p-4'>
      <CardHeader>
        <h3 className='text-large text-default-800'>Projects</h3>
      </CardHeader>

      <CardBody>
        <GitHubCalendar username='VLTHellolin' colorScheme={theme} />
      </CardBody>
    </Card>
  );
};
