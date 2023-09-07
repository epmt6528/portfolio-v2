import './styles/App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme.ts';
import Landing from '@components/Landing/Landing.tsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Landing />
    </ChakraProvider>
  );
}

export default App;
