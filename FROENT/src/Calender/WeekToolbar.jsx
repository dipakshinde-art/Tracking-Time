import React from "react";
import moment from "moment";
import { Box, Button, Flex, Menu, MenuButton, Spacer } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const WeekToolbar = ({ goToPreviousWeek, goToNextWeek, startDate }) => {
  const formattedDate = moment(startDate).format("MMM YYYY");
  return (
    <div>
      <Flex>
        <Box p="4">{formattedDate}</Box>
        <Spacer />
        <Box bg="">
          <Box>
            <Menu>
              <MenuButton
                leftIcon={<ChevronLeftIcon onClick={goToPreviousWeek} />}
                as={Button}
                rightIcon={<ChevronRightIcon onClick={goToNextWeek} />}
              ></MenuButton>
            </Menu>
          </Box>
        </Box>
      </Flex>{" "}
    </div>
  );
};

export default WeekToolbar;
