import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const BlogsHeadBox = ({ headingText }) => {
  return (
    <Flex
      direction="column"
      align="center"
      position="relative"
      top="66"
      gap={8}
      pt="2rem"
      pb="4rem"
      bg="#ffd54f"
    >
      <Text
        fontWeight={700}
        fontSize="0.8rem"
        letterSpacing={1.5}
        color="white"
        p="0 1rem"
      >
        {headingText}
      </Text>
      <Box h="9rem">
        <Image
          h="100%"
          src="https://trackingtime.co/wp-content/uploads/2022/08/Ilustracio%CC%81n-Time-Off_SVG-240x146px.svg"
        />
      </Box>
      <Text
        textAlign="center"
        fontSize={{
          base: "1.3rem",
          sm: "1.8rem",
          md: "2rem",
          lg: "2.2rem",
          xl: "2.2rem",
          "2xl": "2.2rem",
        }}
        fontWeight={700}
        color="white"
      >
        Attendance & Timecards v2
      </Text>
      <a href="https://trackingtime.co/product-updates/attendance-timecards-v2.html">
        <Button
          variant="ghost"
          color="white"
          border="2px solid white"
          fontSize="0.8rem"
          letterSpacing={1.5}
          fontWeight={700}
          p="0.6rem 1.5rem"
          mt="4rem"
          transition="300ms"
          _hover={{
            bg: "none",
            color: "RGBA(0, 0, 0, 0.64)",
            border: "2px solid RGBA(0, 0, 0, 0.64)",
          }}
        >
          READ ARTICLE
        </Button>
      </a>
    </Flex>
  );
};

export default BlogsHeadBox;
