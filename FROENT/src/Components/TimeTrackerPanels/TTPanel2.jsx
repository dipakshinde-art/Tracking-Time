import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TTPanel2 = () => {
  return (
    <Flex
      direction={{
        base: "column-reverse",
        sm: "column-reverse",
        md: "column-reverse",
        lg: "row",
        xl: "row",
      }}
      p={{
        base: "5rem 2%",
        sm: "5rem 3%",
        md: "5rem 4%",
        lg: "5rem 5%",
        xl: "5rem 10rem",
        "2xl": "5rem 10rem",
      }}
      gap={{ base: "5", sm: "5", md: "5", lg: "0", xl: "0" }}
    >
      <Flex
        direction="column"
        justify="center"
        w={{ base: "100%", sm: "100%", md: "100%", lg: "48%", xl: "48%" }}
        p={{
          base: "0 1rem",
          sm: "0 1rem",
          md: "0 2rem",
          lg: "0 2rem",
          xl: "0 3rem 0 0",
        }}
      >
        <Text fontSize="1.9rem" mb="2rem" fontWeight="bold">
          Start tracking with just one click
        </Text>
        <Text fontSize="1.2rem" fontWeight={500} color="gray">
          Try the fastest way to start tracking your activities by simply
          clicking on the start button. Easily keep track of your team’s working
          hours with{" "}
          <a href="https://trackingtime.co/features/online-timesheet">
            <Text
              fontWeight={700}
              display="inline-block"
              textDecor="underline"
              _hover={{ textDecor: "none" }}
            >
              online timesheet
            </Text>
          </a>{" "}
          and simplify your processes.
        </Text>
      </Flex>
      <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}>
        <Image
          w="100%"
          src="https://trackingtime.co/wp-content/uploads/2020/05/Due-DAte@2x-768x525.png"
        />
      </Box>
    </Flex>
  );
};

export default TTPanel2;
