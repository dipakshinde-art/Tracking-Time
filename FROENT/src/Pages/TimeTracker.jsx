import React from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TTPanel1 from "../Components/TimeTrackerPanels/TTPanel1";
import TTPanel2 from "../Components/TimeTrackerPanels/TTPanel2";
import TTPanel3 from "../Components/TimeTrackerPanels/TTPanel3";
import TTPanel4 from "../Components/TimeTrackerPanels/TTPanel4";
import TTPanel5 from "../Components/TimeTrackerPanels/TTPanel5";
import TTPanel6 from "../Components/TimeTrackerPanels/TTPanel6";
import TTPanel7 from "../Components/TimeTrackerPanels/TTPanel7";

const TimeTracker = () => {
  return (
    <Box position="relative" top="68" bg="#f6f8f9">
      {/* head box  */}
      <Flex direction="column" justify="center" align="center" p="4rem 0">
        <Box h="9rem">
          <Image
            h="100%"
            src="https://trackingtime.co/wp-content/uploads/2020/07/Home-office-and-remote-working-solutions-for-team-collaboration.svg"
          />
        </Box>
        <Text mt="1.5rem" mb="4rem" fontSize="2.3rem" fontWeight="bold">
          Time Tracker for every business
        </Text>
        <Flex gap={4}>
          <Input
            placeholder="Your Work Email"
            textAlign="center"
            bg="white"
            variant="outline"
          />
          <Button
            fontSize="0.8rem"
            letterSpacing={1}
            p="0 5rem"
            fontWeight={600}
            bg="#00ad95"
            color="white"
            transition="400ms"
            _hover={{ bg: "#028462" }}
          >
            START FOR FREE
          </Button>
        </Flex>
        <Text
          fontSize="0.8rem"
          mt="0.8rem"
          color="GrayText"
          w="28%"
          textAlign="end"
        >
          14-day PRO trial included
        </Text>
        <Flex justify="center" align="center" mt="1.5rem">
          <Image
            h="1.5rem"
            mr="1.5rem"
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
          />
          <Link to="/login">
            <Text
              fontWeight={700}
              transition="400ms"
              borderBottom="1px solid RGBA(0, 0, 0, 0.24)"
              _hover={{ color: "#00ad95", borderBottom: "1px solid #00ad95" }}
            >
              Sign in with Google
            </Text>
          </Link>
        </Flex>
      </Flex>

      {/* panels */}
      <TTPanel1 />
      <TTPanel2 />
      <TTPanel3 />
      <TTPanel4 />
      <TTPanel5 />
      <TTPanel6 />

      <Box>
        <Text>THE SIMPLEST TIME TRACKER TO IMPROVE YOUR PRODUCTIVITY!</Text>
        <Button
          fontSize="0.8rem"
          letterSpacing={1}
          p="0 5rem"
          fontWeight={600}
          bg="#00ad95"
          color="white"
          transition="400ms"
          _hover={{ bg: "#028462" }}
        >
          START FOR FREE
        </Button>
      </Box>
      <TTPanel7 />
    </Box>
  );
};

export default TimeTracker;
