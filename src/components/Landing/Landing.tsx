import { Box, Flex, Image, Spacer, Square } from '@chakra-ui/react';
import richie from '../../assets/images/richie.png';
import TextBox from '../common/TextBox/TextBox.tsx';
import IconLink from '../common/IconLink/IconLink.tsx';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Landing = () => {
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

      <TextBox
        heading={
          <>
            Software Developer, <br /> based in Vancouver
          </>
        }
        body={
          <>
            I'm an easygoing fullstack developer who loves working with people. I moved to this industry from Bio-Tech
            🧑🏻‍🔬 a few years ago. I'm always eager to learn new skills to improve myself as a software developer.
          </>
        }
      />
    </Flex>
  );
};

export default Landing;
