import { Background } from './components/Background';
import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { IntroCard } from './components/IntroCard';
import { Links } from './components/Links';
import { SwitchTheme } from './components/SwitchTheme';

const App = () => {
  return (
    <>
      <Container>
        <IntroCard />
        <Links />
      </Container>
      <Footer />
      <SwitchTheme />
      <Background position='left' image='bg-left.png' />
      <Background position='right' image='bg-right.png' />
    </>
  );
};

export default App;
