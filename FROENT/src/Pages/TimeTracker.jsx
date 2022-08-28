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
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const TimeTracker = () => {
  return (
    <>
      <Navbar />
      <Box position="relative" top="68" bg="#f6f8f9" pb="10rem">
        {/* head box  */}
        <Flex direction="column" justify="center" align="center" p="4rem 0">
          <Box h="9rem">
            <Image
              h="100%"
              src="https://trackingtime.co/wp-content/uploads/2020/07/Home-office-and-remote-working-solutions-for-team-collaboration.svg"
            />
          </Box>
          <Text
            mt="1.5rem"
            mb="4rem"
            fontSize="2.3rem"
            fontWeight="bold"
            textAlign="center"
          >
            Time Tracker for every business
          </Text>
          <Flex
            justify="center"
            align="center"
            w="100%"
            gap={4}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
          >
            <Input
              placeholder="Your Work Email"
              textAlign="center"
              bg="white"
              variant="outline"
              w={{
                base: "80%",
                sm: "80%",
                md: "60%",
                lg: "20%",
                xl: "20%",
                "2xl": "20%",
              }}
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
              w={{
                base: "80%",
                sm: "80%",
                md: "60%",
                lg: "20%",
                xl: "20%",
                "2xl": "20%",
              }}
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

        <Box textAlign="center" mb="10rem">
          <Text
            fontSize="1.1rem"
            fontWeight="bold"
            letterSpacing={2}
            mb="2.5rem"
          >
            THE SIMPLEST TIME TRACKER TO IMPROVE YOUR PRODUCTIVITY!
          </Text>
          <Button
            fontSize="0.8rem"
            letterSpacing={1}
            p="0 3rem"
            fontWeight={600}
            bg="#00ad95"
            color="white"
            transition="400ms"
            _hover={{ bg: "black" }}
          >
            START FOR FREE
          </Button>
        </Box>
        <TTPanel7 />
      </Box>
      <Footer />
    </>
  );
};

export default TimeTracker;
