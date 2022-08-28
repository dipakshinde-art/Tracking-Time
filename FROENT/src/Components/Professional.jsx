import { AddIcon } from "@chakra-ui/icons";
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
import {
  delete_Professional_task,
  professionalAddTaskApi,
  professionalTaskApi,
  update_professional_task,
} from "../taskreducer/action";
import Textname from "./Textname";

const Professional = () => {
  const dispatch = useDispatch();
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

    if (type === "checkbox") {
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
    dispatch(professionalAddTaskApi(task));
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

  let { Professional_task, filter } = useSelector((state) => state.task);
  if (filter) {
    Professional_task = Professional_task.filter((el) => el.task_completed);
  } else {
    Professional_task = Professional_task;
  }

  useEffect(() => {
    if (Professional_task.length === 0) dispatch(professionalTaskApi());
  }, [Professional_task.length]);
  return (
    <Box>
      <Flex
        m="2"
        p="2"
        justify="space-between"
        cursor="pointer"
        _hover={{
          bg: "whitesmoke",
        }}
      >
        Professional
        <Box onClick={() => onOpen()}>
        <Tooltip hasArrow label='Add task' bg='gray.300' color='black'>

          <AddIcon />
        </Tooltip>
        </Box>
      </Flex>
      {Professional_task.map((el, i) => {
        return (
           <Textname update={update_professional_task} deleted={delete_Professional_task} data={el} key={i} index={el._id} />
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

export default Professional;
