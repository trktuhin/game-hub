import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error)
    ? "This page does not exists"
    : "An unexpected error occured";
  return (
    <>
      <Box padding={5}>
        <NavBar />
        <Heading>Oops</Heading>
        <Text>{errorMessage}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
