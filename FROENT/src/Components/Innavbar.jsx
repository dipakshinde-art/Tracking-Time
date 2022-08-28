import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tab,
  TabList,
  Tabs,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskApi, changeSection, filterTask } from "../taskreducer/action";
import { ChevronDownIcon, AddIcon, HamburgerIcon } from "@chakra-ui/icons";

const Innavbr = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [val, Setval] = useState(false);
  const [show, Setshow] = useState(false);
  const [status, Setstatus] = useState(false);
  const [subtaskvalue, Setsubtaskvalue] = useState("");
  const [task, Settask] = useState({
    task_name: "",
    sub_task: [],
    task_completed: false,
    task_details: "",
  });

  const handelSub = () => {
    let { sub_task } = task;
    sub_task.push({
      subTask: subtaskvalue,
      sub_task_status: false,
    });
    Settask({
      ...task,
      sub_task: sub_task,
    });
    console.log(task);
  };
  const handleTask = (e) => {
    e.preventDefault();
    let { name, value, type } = e.target;

    if (type == "checkbox") {
      if (status) {
        // console.log(task.task_completed);
        Setstatus(false);
        Settask({
          ...task,
          task_completed: false,
        });
      } else {
        Settask({
          ...task,
          task_completed: true,
        });
        Setstatus(true);
      }
    } else {
      Settask({
        ...task,
        [name]: value,
      });
    }
  };

  const handleSubmit = () => {
    console.log(task);
    dispatch(addTaskApi(task));
  };
  const handleShow = () => {
    if (show == false && task.task_name) {
      Setsubtaskvalue("");
      Setshow(true);
    } else {
      Setshow(false);
    }
  };
  const handleVal = () => {
    if (val) {
      Setval(false);
      dispatch(filterTask(false));
    } else {
      Setval(true);
      dispatch(filterTask(true));
    }
  };
  const handleChange = (chg) => {
    // console.log(chg);
    dispatch(changeSection(chg));
  };

  const handleAddtask = () => {
    onOpen();
  };
  return (
    <Flex
      justify="space-between"
      border="1px solid grey"
      borderLeft="none"
      borderRight="none"
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
              <Text onClick={() => handleChange("Note")}>Note</Text>
            </Tab>
            <Tab ml="8" p="2" cursor={"pointer"} borderBottom="2px solid blue">
              <Text onClick={() => handleChange("Notes")}>Notes</Text>
            </Tab>
            {/* <Tab ml="8" p="2" cursor={"pointer"} > */}
              {/* <Text onClick={() => handleChange("Notes")}>Notes</Text> */}
              {/* <HamburgerIcon /> */}
            {/* </Tab> */}
          </TabList>
        </Tabs>
      </Flex>
      <Box display={['none','none','block']}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {val ? "Open tasks" : "All tasks"}
          </MenuButton>

          <MenuList>
            <MenuOptionGroup defaultValue="all" type="radio">
              <MenuItemOption value="all" onClick={handleVal}>
                All tasks
              </MenuItemOption>
              <MenuItemOption value="open" onClick={handleVal}>
                Open tasks
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Button
          leftIcon={<AddIcon />}
          ms="2"
          variant="outline"
          bg="whitesmoke"
          onClick={handleAddtask}
        >
          Task
        </Button>
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Checkbox onChange={handleTask}>Mark as Done</Checkbox>
          </DrawerHeader>
          <DrawerBody>
            <Input
              placeholder="Task name"
              name="task_name"
              onChange={handleTask}
            />

            <Textarea
              mt="2"
              // value={value}
              name="task_details"
              onChange={handleTask}
              placeholder="Add details..."
              size="sm"
            />
            <br></br>
            <br></br>
            <br></br>
            <Text fontWeight="bold">SUBTASKS</Text>

            {show ? (
              <Flex m="2">
                <Input
                  placeholder="Add SubTask..."
                  name="sub_task"
                  onChange={(e) => Setsubtaskvalue(e.target.value)}
                />
                <Button
                  colorScheme={"blue"}
                  onClick={handelSub}
                  isDisabled={subtaskvalue.length > 0 ? false : true}
                >
                  Submit
                </Button>
              </Flex>
            ) : (
              ""
            )}
            <Button
              leftIcon={<AddIcon />}
              m="2"
              variant="outline"
              bg="whitesmoke"
              size="sm"
              onClick={handleShow}
            >
              Add SubTask
            </Button>
            <br></br>
            <br></br>
            <br></br>

            <Button colorScheme={"blue"} onClick={handleSubmit}>
              Submit
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Innavbr;
