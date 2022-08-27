import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import BoardList from "./BoardList";
import Others from "./Others";
import Personal from "./Personal";
import Professional from "./Professional";

const Broad = () => {
  return (
    <Flex direction={{
      base:"column",
      sm: "column",
      md: "column",
      lg: "row",
      xl: "row",

    }}>
      <Box m="2">
        <BoardList />
      </Box>
      <Box m="2">
        <Personal />
      </Box>
      <Box m="2">
        <Professional />
      </Box>
      <Box m="2">
        <Others />
      </Box>
    </Flex>
  );
};

export default Broad;
