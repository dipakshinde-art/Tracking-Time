import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TTPanel5 = () => {
  return (
    <Flex>
      <Box>
        <Image src="https://trackingtime.co/wp-content/uploads/2020/04/landing-developers-ind-Developer-feature-03.svg" />
      </Box>
      <Box>
        <Text>Track time everywhere</Text>
        <Text>
          Download TrackingTime for iOS and Android to track your time wherever
          you work. With the Chrome Button, you can even track your tasks
          directly in Asana, Trello, Jira, and more than 30 other project
          management apps.
        </Text>
      </Box>
    </Flex>
  );
};

export default TTPanel5;
