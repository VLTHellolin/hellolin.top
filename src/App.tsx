import { Background } from './components/Background';
import { Container } from './components/Container';
import { IntroCard } from './components/IntroCard';
import { TechCard } from './components/TechCard';

const App = () => {
  return (
    <Container>
      <IntroCard />
      <TechCard />

      <Background position='left' image='bg-left.png' />
      <Background position='right' image='bg-right.png' />
    </Container>
  );
};

export default App;
