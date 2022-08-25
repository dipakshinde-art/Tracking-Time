import { Box, Flex, Grid, GridItem, Spacer } from "@chakra-ui/react";
import React from "react";
import ManualClose  from "./Form.jsx";

const CalenderGrid = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(1, 50px 1fr 1fr 1fr 1fr 1fr 50px)"
        gap={0.1}
      >
        <GridItem w="100%" h="100vh" border="1px solid #ccc" textAlign="center">
          <ManualClose />
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc">
          {" "}
          <Flex>
            <Box p="4" bg="red.400">
              Box 1
            </Box>
            <Spacer />
            <Box p="4" bg="green.400">
              Box 2
            </Box>
          </Flex>{" "}
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc">
          {" "}
          <Flex>
            <Box p="4" bg="red.400">
              Box 1
            </Box>
            <Spacer />
            <Box p="4" bg="green.400">
              Box 2
            </Box>
          </Flex>{" "}
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc">
          {" "}
          <Flex>
            <Box p="4" bg="red.400">
              Box 1
            </Box>
            <Spacer />
            <Box p="4" bg="green.400">
              Box 2
            </Box>
          </Flex>{" "}
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc">
          {" "}
          <Flex>
            <Box p="4" bg="red.400">
              Box 1
            </Box>
            <Spacer />
            <Box p="4" bg="green.400">
              Box 2
            </Box>
          </Flex>{" "}
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc">
          {" "}
          <Flex>
            <Box p="4" bg="red.400">
              Box 1
            </Box>
            <Spacer />
            <Box p="4" bg="green.400">
              Box 2
            </Box>
          </Flex>{" "}
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc" textAlign="center">
          {" "}
          Sun{" "}
        </GridItem>
      </Grid>
    </>
  );
};

export default CalenderGrid;
