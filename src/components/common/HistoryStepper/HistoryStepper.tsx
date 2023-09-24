import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Square,
  Step,
  StepDescription,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  useSteps,
} from '@chakra-ui/react';
import { BiSquare } from 'react-icons/bi';

const steps = [
  {
    title: 'Intermediate Software Developer',
    company: 'Ensemble Systems Inc.',
    duration: '2022 - ',
    website: 'https://ensemble.com/',
    description: [
      'Produce code for features and improvements on software projects',
      'Troubleshoot, debug, and fix existing software issues',
      'Collaborate with other software developers and project managers',
      'Create technical documentation for reference and reporting',
    ],
  },
  {
    title: 'Junior Software Developer',
    company: 'Sixfactor Professional Services Ltd.',
    duration: '2021 - 2022',
    website: 'https://sixfactor.com/',
    description: [
      'Develop and test software',
      'Deployment of software solutions',
      'UI/UX solution integration',
      'Design collaboration',
    ],
  },
];

const stepperTitleStyle = {
  fontSize: '1.5rem',
  minWidth: '500px',
};

const HistoryStepper = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const clickHandler = (index: number) => {
    setActiveStep(index);
  };

  return (
    <Stepper size='sm' index={activeStep} orientation='vertical' gap='0' cursor='pointer'>
      {steps.map((step, index) => (
        <Step key={index} onClick={() => clickHandler(index)}>
          <StepIndicator>
            <StepStatus />
          </StepIndicator>

          <Box>
            <StepTitle as='h3' style={stepperTitleStyle}>
              {step.title}
              <Square size={5} />
              <Flex>
                <Text>{step.company}</Text>
                <Spacer />
                <Text>{step.duration}</Text>
              </Flex>
            </StepTitle>
            <Square size={5} />
            {activeStep === index ? (
              <StepDescription>
                <List spacing={3}>
                  {step.description.map((description) => (
                    <ListItem key={description}>
                      <ListIcon as={BiSquare} />
                      {description}
                    </ListItem>
                  ))}
                </List>
              </StepDescription>
            ) : null}
            <Square size={50} />
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default HistoryStepper;
