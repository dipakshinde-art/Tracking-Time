import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TTPanel1 = () => {
  return (
    <Flex>
      <Box>
        <Image src="https://trackingtime.co/wp-content/uploads/2020/04/freelance-feature-01.jpg" />
      </Box>
      <Box>
        <Text>A functional time tracker</Text>
        <Text>
          Easy online time tracker is only the beginning. TrackingTime enables
          you to organize and plan your time to work smarter– Even when time is
          tight and pressures are high!
        </Text>
      </Box>
    </Flex>
  );
};

export default TTPanel1;
