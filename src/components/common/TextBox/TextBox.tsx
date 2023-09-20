import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TextBoxProps {
  heading: ReactNode;
  body: ReactNode;
}

const TextBox = ({ heading, body }: TextBoxProps) => {
  return (
    <Box maxW={500}>
      <h2>{heading}</h2>
      <p>{body}</p>
    </Box>
  );
};

export default TextBox;
