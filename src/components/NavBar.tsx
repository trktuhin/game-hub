import { HStack, Box, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Box p="5px">
        <Image src={logo} boxSize="60px" />
      </Box>
      <Text>Nav Bar</Text>
    </HStack>
  );
};

export default NavBar;
