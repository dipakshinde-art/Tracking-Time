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
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_Personal_task, personalAddTaskApi, personalTaskApi, update_personal_task } from "../taskreducer/action";
import { AddIcon } from "@chakra-ui/icons";
import Textname from "./Textname";

const Personal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        console.log(task.task_completed);
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
    // console.log(task);
      dispatch(personalAddTaskApi(task))
      onClose();
  };
  const handleShow = () => {
    if (show == false && task.task_name) {
      Setsubtaskvalue("");
      Setshow(true);
    } else {
      Setshow(false);
    }
  };

  let { Personal_task, filter } = useSelector((state) => state.task);
  if (filter) {
    Personal_task = Personal_task.filter((el) => el.task_completed);
  } else {
    Personal_task = Personal_task;
  }
  const dispatch = useDispatch();
  // console.log(Personal_task[0]._id);
  useEffect(() => {
    if (Personal_task.length === 0) dispatch(personalTaskApi());
  }, [Personal_task.length]);
  return (
    <Box>
      <Flex
        justify="space-between"
        m="2"
        p="2"
        cursor="pointer"
        _hover={{
          bg: "whitesmoke",
        }}
      >
        Personal
        <Box onClick={() => onOpen()}>
        <Tooltip hasArrow label='Add task' bg='gray.300' color='black'>
          <AddIcon />
          </Tooltip>
        </Box>
      </Flex>
      {Personal_task.map((el, i) => {
        return (
          <Textname update={update_personal_task} deleted={delete_Personal_task} data={el} key={i} index={el._id} />
        );
      })}

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
              //   value={value}
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
    </Box>
  );
};

export default Personal;
