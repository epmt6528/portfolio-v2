import { Box, Flex, Image, Spacer, Square } from '@chakra-ui/react';
import richie from '../../assets/images/richie.png';
import IconLink from '../common/IconLink/IconLink.tsx';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import HistoryStepper from '../common/HistoryStepper/HistoryStepper.tsx';

const History = () => {
  return (
    <Flex height='100vh' alignItems='center' position='relative' overflow='hidden'>
      <Box>
        <h1>
          Taichi <br />
          Murai
        </h1>
        <Spacer height={10} />
        <Flex justifyContent='flex-start'>
          <IconLink icon={FaLinkedinIn} href='https://chakra-ui.com' />
          <Square px={2} />
          <IconLink icon={FaGithub} href='https://chakra-ui.com' />
        </Flex>
      </Box>

      <Image src={richie} boxSize='500px' objectFit='contain' alt='Taichi' />

      <HistoryStepper />
    </Flex>
  );
};

export default History;
