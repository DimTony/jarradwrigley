import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPage = () => {
  return (
    <>
      <VStack w="100%" pt="3rem">
        <FaCheckCircle size="10rem" color="green" />
        <Text color="#888" fontSize="6vw">
          Thank You
        </Text>
        <Text color="#888" fontSize="2vw" textAlign="center">
          The form was submitted succesfully. Further information will be sent
          to your email.
        </Text>
      </VStack>
    </>
  );
};

export default SuccessPage;
