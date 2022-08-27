import React, { useState } from "react";
import moment from "moment";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Spacer,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { MdCalendarViewWeek } from "react-icons/md";
import styles from "./dash.module.css";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";

const ScrollCalender = ({
  goToPreviousWeek,
  goToNextWeek,
  startDate,
  goToToday,
}) => {
  const formattedDate = moment(startDate).format("MMM YYYY");

  return (
    <Box py={{ base: 2 }} px={{ base: 4 }}>
      <Flex
        mt="5"
        _hover={{
          cursor: "pointer",
        }}
      >
        <Box>
          <Menu onClick={goToToday}>
            <MenuButton
             
              leftIcon={<ChevronLeftIcon onClick={goToPreviousWeek} />}
              as={Button}
              rightIcon={<ChevronRightIcon onClick={goToNextWeek} />}
            >
              {formattedDate}
            </MenuButton>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4">
          <QuestionOutlineIcon mr="5" />
          <Menu>
            <MenuButton
              leftIcon={<MdCalendarViewWeek />}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Week
            </MenuButton>
            <MenuList>
              <MenuItem>Day</MenuItem>
              <MenuItem>Month</MenuItem>
              <MenuItem>Team</MenuItem>
              <MenuItem>
                <Checkbox defaultChecked>Stacked</Checkbox>
              </MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>

          <Box className={styles.insight_button}>
            <i className={styles.insights_ico}></i>{" "}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ScrollCalender;
