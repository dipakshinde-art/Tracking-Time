import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TTPanel5 = () => {
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
          src="https://trackingtime.co/wp-content/uploads/2020/04/timecards-feature01.jpg"
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
          Track time everywhere
        </Text>
        <Text fontSize="1.2rem" fontWeight={500} color="gray">
          Download <b>TrackingTime</b> for{" "}
          <a href="https://apps.apple.com/us/app/trackingtime-task-based-time/id909469423?ign-mpt=uo%3D4">
            <Text
              fontWeight={700}
              display="inline-block"
              textDecor="underline"
              _hover={{ textDecor: "none" }}
            >
              iOS
            </Text>
          </a>{" "}
          and{" "}
          <a href="https://play.google.com/store/apps/details?id=co.trackingtime">
            <Text
              fontWeight={700}
              display="inline-block"
              textDecor="underline"
              _hover={{ textDecor: "none" }}
            >
              Android
            </Text>
          </a>{" "}
          to track your time wherever you work. With the Chrome Button, you can
          even track your tasks directly in{" "}
          <a href="https://trackingtime.co/time-tracking-for-asana">
            <Text
              fontWeight={700}
              display="inline-block"
              textDecor="underline"
              _hover={{ textDecor: "none" }}
            >
              Asana
            </Text>
          </a>
          ,{" "}
          <a href="https://trackingtime.co/time-tracking-for-trello">
            <Text
              fontWeight={700}
              display="inline-block"
              textDecor="underline"
              _hover={{ textDecor: "none" }}
            >
              Trello
            </Text>
          </a>
          ,{" "}
          <a href="https://trackingtime.co/time-tracking-for-jira">
            <Text
              fontWeight={700}
              display="inline-block"
              textDecor="underline"
              _hover={{ textDecor: "none" }}
            >
              Jira
            </Text>
          </a>
          , and more than 30 other{" "}
          <a href="https://trackingtime.co/integrations">
            <Text
              fontWeight={700}
              display="inline-block"
              textDecor="underline"
              _hover={{ textDecor: "none" }}
            >
              project management apps
            </Text>
          </a>
          .
        </Text>
      </Flex>
    </Flex>
  );
};

export default TTPanel5;
