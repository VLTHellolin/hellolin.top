import { Background } from './components/Background';
import { Container } from './components/Container';
import { IntroCard } from './components/IntroCard';

const App = () => {
  return (
    <Container>
      <IntroCard />

      <Background position='left' image='bg-left.png' />
      <Background position='right' image='bg-right.png' />
    </Container>
  );
};

export default App;
