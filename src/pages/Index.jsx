// Software Engineering Portfolio Home Page for John Gachara Mwangi
import { Box, Flex, Text, Button, Image, VStack, HStack, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Flex direction="column" align="center" maxW="1200px" m="auto">
        {/* Header Section */}
        <VStack spacing={4}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1573929491484-c151f78d50e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb2huJTIwZ2FjaGFyYSUyMG13YW5naXxlbnwwfHx8fDE3MTM3NzM4OTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Gachara Mwangi" />
          <Text fontSize="2xl" fontWeight="bold">
            John Gachara Mwangi
          </Text>
          <Text fontSize="xl" color="gray.500">
            Software Engineer
          </Text>
        </VStack>

        {/* Social Links */}
        <HStack spacing={5} mt={5}>
          <Link href="https://github.com/johngachara" isExternal>
            <Icon as={FaGithub} w={8} h={8} />
          </Link>
          <Link href="https://linkedin.com/in/johngachara" isExternal>
            <Icon as={FaLinkedin} w={8} h={8} />
          </Link>
          <Link href="mailto:johngachara@example.com">
            <Icon as={FaEnvelope} w={8} h={8} />
          </Link>
          <Link href="https://johngachara.com/resume.pdf" isExternal>
            <Icon as={FaFilePdf} w={8} h={8} />
          </Link>
        </HStack>

        {/* About Me Section */}
        <Box mt={10}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            About Me
          </Text>
          <Text fontSize="md">I am a passionate Software Engineer with a focus on building scalable web applications and services. With a background in computer science, I specialize in full-stack development, leveraging modern technologies and frameworks to deliver exceptional user experiences.</Text>
        </Box>

        {/* Projects Section */}
        <Box mt={10}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Projects
          </Text>
          <VStack spacing={4} align="start">
            <Box p={5} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">Project One</Text>
              <Text mt={2}>A comprehensive project management tool designed to streamline workflow and enhance productivity.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Text fontWeight="bold">Project Two</Text>
              <Text mt={2}>An innovative e-commerce platform that integrates advanced machine learning models to personalize shopping experiences.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box mt={10} textAlign="center">
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Get In Touch
          </Text>
          <Button colorScheme="blue" leftIcon={<FaEnvelope />}>
            Contact Me
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
