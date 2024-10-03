import { useState } from "react";
// PaymentForm.js
import React, { useEffect } from "react";
import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Spinner,
  Text,
  Tooltip,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { zoomInOut } from "./CustomCSS";
import PayPalLogo from "../assets/PayPal.png";
import { IoMdPerson } from "react-icons/io";
import { BsPersonBoundingBox } from "react-icons/bs";
import { QuestionIcon } from "@chakra-ui/icons";
import MobileQuestionTooltip from "./MobileTooltip";

const PaymentForm = ({
  handleSubmit,
  setCurrentBottom,
  pictureData,
  setPictureData,
}) => {
  const [isGenerating, setIsGenerating] = useState(true);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setIsGenerating(true);

    const timer = setTimeout(() => {
      setIsGenerating(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPictureData(reader.result); // Store the picture data
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  if (isGenerating) {
    return (
      <VStack mb="2rem" justifyContent="center" pt="5rem" w="100%">
        <Text
          animation={`${zoomInOut} 3s ease-in-out infinite`}
          fontSize={{ xl: "2rem", base: "1rem" }}
          color="#306ac0"
          fontWeight="700"
          mb="3rem"
        >
          Generating Payment Plan
        </Text>
        <Spinner boxSize="5rem" color="#306ac0" borderWidth="0.5rem" />
      </VStack>
    );
  }

  return (
    <VStack spacing={4} w="100%">
      <VStack pt="2rem">
        <Text
          fontSize={{ xl: "2rem", base: "1rem" }}
          color="#306ac0"
          fontWeight="600"
        >
          It's almost time to enjoy the Jarrad Wrigley experience!
        </Text>

        {!isGenerating && step === 1 && (
          <VStack w="20rem">
            <Box
              w="100%"
              h="100%"
              bg="white"
              borderRadius="1rem"
              py="1rem"
              border="0.5px solid rgba(48, 106, 192, 0.3)"
            >
              <VStack w="100%">
                <VStack spacing={0}>
                  <Image src={PayPalLogo} alt="pp" w="5rem" h="auto" />
                  <Text fontSize="1.5rem">Payment review</Text>
                </VStack>
                <VStack
                  alignItems="flex-start"
                  px="1.5rem"
                  justifyContent="center"
                  spacing={0}
                  w="100%"
                >
                  <Text fontSize="0.8rem" fontWeight="700">
                    From
                  </Text>
                  <HStack alignItems="flex-start" h="2.5rem">
                    <HStack
                      h="100%"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon
                        as={IoMdPerson}
                        w={8}
                        h={8}
                        bg="#e0e0e0"
                        boxShadow="20px 20px 60px #bebebe,-20px -20px 60px #ffffff"
                        borderRadius="full"
                        p={1}
                        color="#273465"
                      />
                    </HStack>
                    <VStack w="90%" alignItems="flex-start" spacing={0}>
                      <Text fontSize="0.8rem">John Doe</Text>
                      <Text fontSize="0.8rem">Egbe, New South Wales</Text>
                    </VStack>
                  </HStack>
                </VStack>
                <VStack
                  alignItems="flex-start"
                  px="1.5rem"
                  justifyContent="center"
                  spacing={0}
                  w="100%"
                >
                  <HStack alignItems="center">
                    <Text fontSize="0.8rem" fontWeight="700">
                      To
                    </Text>
                    <Tooltip
                      label={
                        <Box>
                          <Text fontWeight="bold">
                            Please transfer using PayPal's 'Friends and Family'
                            option:
                          </Text>
                          <Text>1. Log in to your PayPal account.</Text>
                          <Text>
                            2. Make sure you have the amount to be paid
                            available in your PayPal balance.
                          </Text>
                          <Text>3. Select 'Send & Request.'</Text>
                          <Text>4. Choose 'Send to a friend.'</Text>
                          <Text>5. Enter the provided email and amount.</Text>
                          {/* <Text>
                      5. Ensure that each transfer does not exceed $1,000.
                    </Text>
                    <Text>
                      6. Complete the transfer. Repeat the process if the total
                      amount exceeds $1,000.
                    </Text> */}
                          <Text>6. Complete the transfer.</Text>
                        </Box>
                      }
                      aria-label="PayPal Transfer Instructions"
                      placement="right"
                    >
                      <QuestionIcon
                        ml={1}
                        color="blue.500"
                        display={{ xl: "flex", base: "none" }}
                      />
                    </Tooltip>
                    <Box display={{ xl: "none", base: "flex" }}>
                      <MobileQuestionTooltip />
                    </Box>
                  </HStack>

                  <HStack alignItems="flex-start" h="2.5rem">
                    <HStack
                      h="100%"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon
                        as={BsPersonBoundingBox}
                        w={8}
                        h={8}
                        bg="#e0e0e0"
                        boxShadow="20px 20px 60px #bebebe,-20px -20px 60px #ffffff"
                        borderRadius="full"
                        p={1}
                        color="#278fc2"
                      />
                    </HStack>
                    <VStack w="90%" alignItems="flex-start" spacing={0}>
                      <Text fontSize="0.8rem">
                        Ashantae Jalissa Witherspoon
                      </Text>
                      <Text fontSize="0.8rem" color="#306ac0">
                        kickhart7@gmail.com
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>
                {/* <Box w="100%" px="1.5rem">
            <HStack
              bg="rgba(39, 143, 194, 0.1)"
              p="0.5rem"
              h="100%"
              borderRadius="1rem"
            >
              <HStack
                fontWeight="600"
                fontSize="0.8rem"
                w="100%"
                justifyContent="space-between"
              >
                <Text>Payment Option</Text>
                <Text>Batch payment in $1,000.00 denominations</Text>
              </HStack>
            </HStack>
          </Box> */}

                <Box w="100%" px="1.5rem">
                  <HStack
                    bg="rgba(39, 143, 194, 0.1)"
                    p="0.5rem"
                    h="100%"
                    borderRadius="1rem"
                  >
                    <HStack
                      fontWeight="600"
                      fontSize="0.8rem"
                      w="100%"
                      justifyContent="space-between"
                    >
                      <Text>Payment Type</Text>
                      <Text>Friends & Family</Text>
                    </HStack>
                  </HStack>
                </Box>

                {/* <Box w="100%" px="1.5rem">
            <VStack
              bg="rgba(39, 143, 194, 0.1)"
              p="0.5rem"
              h="100%"
              borderRadius="1rem"
            >
              <HStack fontSize="0.8rem" w="100%" justifyContent="space-between">
                <Text>Transfer Amount</Text>
                <Text>$4,500.00</Text>
              </HStack>
              <HStack
                fontSize="0.8rem"
                color="red.500"
                w="100%"
                justifyContent="space-between"
              >
                <Text>Outstanding Amount</Text>
                <Text>-$5,000.00</Text>
              </HStack>
              <HStack fontSize="0.8rem" w="100%" justifyContent="space-between">
                <Text>Total Amount</Text>
                <Text>$10,000.00</Text>
              </HStack>
            </VStack>
          </Box> */}
                <Box w="100%" px="1.5rem">
                  <VStack
                    bg="rgba(39, 143, 194, 0.1)"
                    p="0.5rem"
                    h="100%"
                    borderRadius="1rem"
                  >
                    <HStack
                      fontSize="0.8rem"
                      w="100%"
                      justifyContent="space-between"
                    >
                      <Text>Transfer Amount</Text>
                      <Text>A$500.00</Text>
                    </HStack>
                    <HStack
                      fontSize="0.8rem"
                      color="red.500"
                      w="100%"
                      justifyContent="space-between"
                    >
                      <Text>Outstanding Amount</Text>
                      <Text>-A$500.00</Text>
                    </HStack>
                    <HStack
                      fontSize="0.8rem"
                      w="100%"
                      justifyContent="space-between"
                    >
                      <Text>Total Amount</Text>
                      <Text>A$1000.00</Text>
                    </HStack>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </VStack>
        )}

        {!isGenerating && step === 2 && <Text>step 2</Text>}
      </VStack>

      {/* <Input type="file" accept="image/*" onChange={onFileChange} /> */}
      <HStack>
        <Button onClick={() => setCurrentBottom("form")}>Previous</Button>

        {!isGenerating && step === 1 && (
          <Button onClick={() => setStep(2)} colorScheme="blue">
            Paid
          </Button>
        )}
        {!isGenerating && step === 2 && (
          <Button onClick={handleSubmit} colorScheme="blue">
            Submit
          </Button>
        )}
      </HStack>
    </VStack>
  );
};

export default PaymentForm;
