import { Flex } from '@chakra-ui/react';
import HistoryStepper from '../common/HistoryStepper/HistoryStepper.tsx';

const History = () => {
  return (
    <Flex height='100vh' alignItems='center' position='relative' overflow='hidden'>
      <HistoryStepper />
    </Flex>
  );
};

export default History;
