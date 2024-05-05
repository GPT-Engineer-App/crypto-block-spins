import { Container, VStack, Heading, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { FaBitcoin, FaDice } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("blue.800", "blue.900");
  const color = useColorModeValue("yellow.400", "yellow.300");

  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color={color}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" fontWeight="bold">
          Block Spins
        </Heading>
        <Text fontSize="xl" textAlign="center">
          The premier destination for crypto-based casino gaming!
        </Text>
        <Button leftIcon={<FaBitcoin />} colorScheme="yellow" variant="solid" size="lg">
          Deposit Crypto
        </Button>
        <Button rightIcon={<FaDice />} colorScheme="yellow" variant="outline" size="lg">
          Start Playing
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
