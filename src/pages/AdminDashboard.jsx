import React, { useState } from "react";
import { Box, Spinner, VStack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ContractForm from "../other/ContractForm";
import PaymentForm from "../other/PaymentForm";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentBottom, setCurrentBottom] = useState("form");
  const [pdfData, setPdfData] = useState(null);
  const [pictureData, setPictureData] = useState(null);

  const handlePdfUpload = (data) => {
    setPdfData(data); // Store the uploaded PDF data
  };

  const handleSubmit = async () => {
    if (!pdfData || !pictureData) return; // Ensure both files are available

    const pdfBlob = await fetch(pdfData).then((res) => res.blob());
    const pictureBlob = await fetch(pictureData).then((res) => res.blob());

    const formData = new FormData();
    formData.append("pdf", pdfBlob, "contract.pdf");
    formData.append("picture", pictureBlob, "picture.jpg");

    try {
      setIsLoading(true);
      const response = await fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("Files uploaded successfully:", result);
      setCurrentBottom("done");
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setIsLoading(false);
    }
  };

  let content;

  switch (currentBottom) {
    case "form":
      content = (
        <ContractForm
          setCurrentBottom={setCurrentBottom}
          onFileUpload={handlePdfUpload}
          pdfData={pdfData}
        />
      );
      break;

    case "payment":
      content = (
        <PaymentForm
          handleSubmit={handleSubmit}
          setCurrentBottom={setCurrentBottom}
          pictureData={pictureData}
          setPictureData={setPictureData}
        />
      );
      break;

    case "done":
      content = <Text>Files uploaded successfully!</Text>;
      break;

    default:
      content = (
        <ContractForm
          setCurrentBottom={setCurrentBottom}
          onFileUpload={handlePdfUpload}
          pdfData={pdfData}
        />
      );
      break;
  }

  return (
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
          bg="rgba(255, 255, 255, 0.8)"
          zIndex="10"
        >
          <Spinner size="xl" />
        </Box>
      )}
    </Box>
  );
};

export default AdminDashboard;
