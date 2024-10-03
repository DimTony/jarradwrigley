import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Spinner,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import MobileForm from "../components/MobileForm";
import axios from "axios";
import { BaseUrl } from "../constants";
import ClientForm from "../components/ClientForm";
import SuccessPage from "../components/SuccessPage";

const Landing = () => {
  const [currentBottom, setCurrentBottom] = useState("form");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    clientType: "",
    clientName: "",
    clientAddress: "",
    clientPhone: "",
    clientEmail: "",
    venueName: "",
    venueAddress: "",
    eventDescription: "",
    date: "",
    startTime: "",
    endTime: "",
    canPerformerSell: "",
  });
  const toast = useToast();

  const areFieldsFilled = () => {
    const { clientEmail, ...otherFields } = data;
    return Object.values(otherFields).every((field) => field.trim() !== "");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    switch (type) {
      case "checkbox":
        setData((prevData) => ({
          ...prevData,
          [name]: checked,
        }));
        break;

      case "select-one":
      case "date":
      case "time":
      default:
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!areFieldsFilled()) {
      toast({
        title: "Required fields are missing",
        description: "Please fill out all required fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      setIsLoading(true);

      try {
        const response = await axios.post(`${BaseUrl}/jarrad-wrigley/save`, {
          ...data,
        });

        await new Promise((resolve) => setTimeout(resolve, 3000));

        if (response.status === 201) {
          setCurrentBottom("done");
          toast({
            title: "Form submitted successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
        } else {
          toast({
            title: "Error submitting form",
            description: "Please try again later.",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
        }
      } catch (error) {
        console.error("Error submitting form", error);

        // Set a timeout for 3 seconds before showing the error toast
        await new Promise((resolve) => setTimeout(resolve, 3000));

        toast({
          title: "Error submitting form",
          description: "Please try again later.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      } finally {
        setIsLoading(false); // Stop loader
      }
    }
  };

  let content;

  switch (currentBottom) {
    case "form":
      content = (
        <>
          <ClientForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            data={data}
            areFieldsFilled={areFieldsFilled}
          />
        </>
      );
      break;

    case "done":
      content = (
        <>
          <SuccessPage />
        </>
      );
      break;

    default:
      content = (
        <ClientForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          data={data}
          areFieldsFilled={areFieldsFilled}
        />
      );
      break;
  }

  return (
    <>
      <Box p="0.5rem" w="100vw" h="100vh">
        <VStack alignItems="flex-start" w="100%" h="100%" overflow="hidden">
          <Navbar />
          {content}
        </VStack>
        {isLoading && (
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="rgba(255, 255, 255, 0.8)" // Slight transparency
            zIndex="10"
          >
            <Spinner size="xl" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Landing;
