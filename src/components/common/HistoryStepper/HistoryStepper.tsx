import {
  Box,
  Flex,
  List,
  ListItem,
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
    company: 'Software Developer',
    duration: '2021 - 2022',
    website: 'https://sixfactor.com/',
    description: [
      'Develop and test software',
      'Deployment of software solutions',
      'UI/UX solution integration',
      'Design collaboration',
    ],
  },
  { title: 'Langara College', description: ['Select Rooms'] },
];

const HistoryStepper = () => {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Stepper size='sm' index={activeStep} orientation='vertical' height='400px' gap='0'>
      {steps.map((step, index) => (
        <Step key={index} hidden={index !== activeStep}>
          <StepIndicator>
            <StepStatus />
          </StepIndicator>

          <Box>
            <StepTitle>{step.title}</StepTitle>
            <Flex>
              <Text>{step.company}</Text>
              <Text>{step.duration}</Text>
            </Flex>

            {index === activeStep ? (
              <StepDescription>
                <List spacing={3}>
                  {step.description.map((description) => (
                    <ListItem key={description}>{description}</ListItem>
                  ))}
                </List>
              </StepDescription>
            ) : null}
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default HistoryStepper;
