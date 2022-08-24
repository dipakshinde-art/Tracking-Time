import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSection } from "../taskreducer/action";
import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";

const Innavbr = () => {
  const dispatch = useDispatch();

  const [val, Setval] = useState(false);

  const handleChange = (chg) => {
    console.log(chg);
    dispatch(changeSection(chg));
  };
  return (
    <Flex
      justify="space-between"
      border="1px solid grey"
      opacity="3"
      pos={"sticky"}
      top="0"
      p="2"
      bg="white"
    >
      <Flex justify={"space-around"}>
        <Tabs borderBottom="1px solid white">
          <TabList>
            <Tab ml="4" p="2" cursor={"pointer"} borderBottom="2px solid blue">
              <Text onClick={() => handleChange("List")}>List</Text>
            </Tab>

            <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid black">
              <Text onClick={() => handleChange("Board")}>Board</Text>
            </Tab>

            <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid blue">
              <Text onClick={() => handleChange("Timeline")}>Timeline</Text>
            </Tab>
            <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid blue">
              <Text onClick={() => handleChange("Report")}>Report</Text>
            </Tab>
            <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid blue">
              <Text onClick={() => handleChange("Notes")}>Notes</Text>
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {val ? "Open tasks" : "All tasks"}
          </MenuButton>

          <MenuList>
            <MenuOptionGroup defaultValue="all" type="radio">
              <MenuItemOption value="all" onClick={() => Setval(false)}>
                All tasks
              </MenuItemOption>
              <MenuItemOption value="open" onClick={() => Setval(true)}>
                Open tasks
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Button leftIcon={<AddIcon />} ms="2" variant="outline" bg="whitesmoke">
          Task
        </Button>
      </Box>
    </Flex>
  );
};

export default Innavbr;
