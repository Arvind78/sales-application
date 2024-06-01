// NotFoundPage.jsx
import React from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
    >
      <VStack spacing={6} textAlign="center">
        <Text fontSize="4xl" fontWeight="bold">
          404 - Page Not Found
        </Text>
        <Text fontSize="lg">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </Text>
        <Button colorScheme="teal" onClick={goHome}>
          Go to Home
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFoundPage;
