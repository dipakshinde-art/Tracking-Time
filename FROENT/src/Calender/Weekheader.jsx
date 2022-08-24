import { Grid, Flex, Box, GridItem, Spacer } from "@chakra-ui/react";
import React from "react";
import { isTodaysDate } from "./util";

const Weekheader = ({ weekDays }) => {
  return (
    <Flex w="100%">
      {weekDays.map((day) => (
        <Box key={day.dateStamp}>
          <GridItem w="100%" h="100vh" border="1px solid #ccc">
            {" "}
            <Flex>
              <Box p="4" >
                <p>{day.weekDayName}</p>
              </Box>
              <Spacer />
              <Box p="4" >
                <p>{day.date}</p>
              </Box>
            </Flex>{" "}
          </GridItem>
        </Box>
      ))}
    </Flex>
  );
};

export default Weekheader;
