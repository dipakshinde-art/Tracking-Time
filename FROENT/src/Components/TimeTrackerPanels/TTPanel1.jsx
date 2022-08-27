import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TTPanel1 = () => {
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
          src="https://trackingtime.co/wp-content/uploads/2020/04/freelance-feature-01.jpg"
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
          A functional time tracker
        </Text>
        <Text fontSize="1.2rem" fontWeight={500} color="gray">
          Easy <b>online time tracker</b> is only the beginning. TrackingTime
          enables you to organize and{" "}
          <a href="https://trackingtime.co/best-practices/time-estimates-planning.html">
            <Text
              fontWeight={700}
              display="inline-block"
              textDecor="underline"
              _hover={{ textDecor: "none" }}
            >
              plan your time
            </Text>
          </a>{" "}
          to{" "}
          <a href="https://trackingtime.co/features/project-management">
            <Text
              fontWeight={700}
              display="inline-block"
              textDecor="underline"
              _hover={{ textDecor: "none" }}
            >
              work smarter
            </Text>
          </a>
          – Even when time is tight and pressures are high!
        </Text>
      </Flex>
    </Flex>
  );
};

export default TTPanel1;
