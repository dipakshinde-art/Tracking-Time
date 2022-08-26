import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const BlogsLayout = (data) => {
  return (
    <>
      {data.data.length > 0 &&
        data.data.map((item) => (
          <a href={item.link} key={item.id}>
            <GridItem
              boxShadow="md"
              borderBottomRadius={4}
              transition="500ms"
              _hover={{ transform: `scale(1.05)`, boxShadow: "xl" }}
            >
              <Flex bg={item.bg} h="11rem" align="end" justify="center">
                <Image h="80%" src={item.image} />
              </Flex>
              <Box
                textAlign="center"
                p="1.5rem"
                h="9rem"
                fontWeight={700}
                fontSize="1.2rem"
              >
                <Text>{item.title}</Text>
              </Box>
            </GridItem>
          </a>
        ))}
    </>
  );
};

export default BlogsLayout;
