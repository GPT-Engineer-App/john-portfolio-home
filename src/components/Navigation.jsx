import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex justifyContent="space-between" maxW="1200px" m="auto">
        <Link as={RouterLink} to="/" p={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" p={2}>
          About
        </Link>
        <Link as={RouterLink} to="/projects" p={2}>
          Projects
        </Link>
        <Link as={RouterLink} to="/contact" p={2}>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
