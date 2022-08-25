import React, { useState } from "react";

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

const ScrollCalender = () => {
  const onChange = (date) => {
    console.log(date.toString());
  };
  let date;
  const current = new Date();
  //  date = `${current.getDate()}/${
  //   current.getMonth() + 1
  // }/${current.getFullYear()}`;

  date = `${current.getMonth() + 1}/${current.getFullYear()}`;
  let m = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = "" + current.getFullYear();
  for (let i = 0; i < m.length; i++) {
    if (i == 7) {
      month = m[i];
    }
  }
  return (
    <Box>
      <Flex
        mt="5"
        _hover={{
          cursor: "pointer",
        }}
      >
        <Box>
          <Menu>
            <MenuButton
              leftIcon={<ChevronLeftIcon />}
              as={Button}
              rightIcon={<ChevronRightIcon />}
            > 
              {month}
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
