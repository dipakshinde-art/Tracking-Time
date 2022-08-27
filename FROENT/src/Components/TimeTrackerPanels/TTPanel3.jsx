import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TTPanel3 = () => {
  return (
    <Flex
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
      }}
      p={{
        base: "5rem 2%",
        sm: "5rem 3%",
        md: "5rem 4%",
        lg: "5rem 8%",
        xl: "5rem 10rem",
        "2xl": "5rem 10rem",
      }}
      gap={{ base: "5", sm: "5", md: "5", lg: "0", xl: "0" }}
    >
      <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}>
        <Image
          w="100%"
          src="https://trackingtime.co/wp-content/uploads/2020/04/landing-remote-teams-ind-RemoteTeams-feature05@2x-768x525.png"
        />
      </Box>
      <Flex
        direction="column"
        justify="center"
        w={{ base: "100%", sm: "100%", md: "100%", lg: "48%", xl: "48%" }}
        p={{
          base: "0 1rem",
          sm: "0 1rem",
          md: "0 0.5rem 0 2rem",
          lg: "0 0.5rem 0 2rem",
          xl: "0 3rem",
        }}
      >
        <Text fontSize="1.9rem" mb="2rem" fontWeight="bold">
          Track Time in real-time
        </Text>
        <Text fontSize="1.2rem" fontWeight={500} color="gray">
          Today, work happens everywhere. That’s why our{" "}
          <b>time tracker software</b> allows you and your team to{" "}
          <b>track time</b> in real-time wherever you work. Set due dates to
          organize and prioritize your projects and tasks and automatically sync
          them with your employees’ calendar.{" "}
          <a href="https://trackingtime.co/productivity/planning-and-time-tracking-to-succeed-with-your-projects.html">
            <Text
              fontWeight={700}
              display="inline-block"
              textDecor="underline"
              _hover={{ textDecor: "none" }}
            >
              Never miss a deadline!
            </Text>
          </a>
        </Text>
      </Flex>
    </Flex>
  );
};

export default TTPanel3;
