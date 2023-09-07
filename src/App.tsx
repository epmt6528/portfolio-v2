import './styles/App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme.ts';

function App() {
  return <ChakraProvider theme={theme}>TEST</ChakraProvider>;
}

export default App;
