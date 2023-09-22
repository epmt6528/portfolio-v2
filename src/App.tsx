import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme.ts';
import Landing from './components/Landing/Landing.tsx';
import History from './components/History/History.tsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Landing />
      <History />
    </ChakraProvider>
  );
}

export default App;
