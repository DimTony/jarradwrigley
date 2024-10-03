import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const MobileForm = ({ handleChange, data }) => {
  return (
    <>
      <VStack
        w="100%"
        h="90%"
        alignItems="flex-start"
        overflow="auto"
        mb="1rem"
        display={{ md: "none", base: "flex" }}
      >
        <FormControl mb="1rem">
          <FormLabel>Client type:</FormLabel>
          <Select
            placeholder="Select client type"
            onChange={handleChange}
            name="clientType"
            value={data.clientType}
          >
            <option value="individual">Individual</option>
            <option value="corporate">Corporate</option>
          </Select>
        </FormControl>

        <FormControl mb="1rem">
          <FormLabel>Name:</FormLabel>

          <Input
            type="text"
            name="clientName"
            value={data.clientName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb="1rem">
          <FormLabel>Address:</FormLabel>

          <Input
            type="text"
            name="clientAddress"
            value={data.clientAddress}
            onChange={handleChange}
            placeholder="e.g Street, City, State / Territory, Postcode"
          />
        </FormControl>

        <FormControl mb="1rem">
          <FormLabel>Phone Number:</FormLabel>

          <Input
            type="number"
            name="clientPhone"
            value={data.clientPhone}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb="1rem">
          <FormLabel>Email:</FormLabel>

          <Input
            type="text"
            name="clientEmail"
            value={data.clientEmail}
            onChange={handleChange}
            placeholder="(optional)"
          />
        </FormControl>

        <FormControl mb="1rem">
          <FormLabel>Venue Name:</FormLabel>

          <Input
            type="text"
            name="venueName"
            value={data.venueName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb="1rem">
          <FormLabel>Venue Address:</FormLabel>

          <Input
            type="text"
            name="venueAddress"
            value={data.venueAddress}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb="1rem">
          <FormLabel>How would you describe the event?</FormLabel>
          <Textarea
            placeholder="Perfomance Description"
            name="eventDescription"
            value={data.eventDescription}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          {/* Date input */}
          <FormLabel>Date:</FormLabel>
          <Input
            type="date"
            name="date"
            value={data.date}
            onChange={handleChange}
          />

          {/* Start time input */}
          <FormLabel>Start Time:</FormLabel>
          <Input
            type="time"
            name="startTime"
            value={data.startTime}
            onChange={handleChange}
          />

          {/* End time input */}
          <FormLabel>End Time:</FormLabel>
          <Input
            type="time"
            name="endTime"
            value={data.endTime}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb="1rem">
          <FormLabel>
            Can the performer sell CDs and merchandise at the performance?
          </FormLabel>
          <Select
            placeholder="Select preferred option"
            onChange={handleChange}
            name="canPerformerSell"
            value={data.canPerformerSell}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="notSpecifiedNotApplicable">
              Do Not Specify / Not Applicable
            </option>
          </Select>
        </FormControl>
      </VStack>
    </>
  );
};

export default MobileForm;
