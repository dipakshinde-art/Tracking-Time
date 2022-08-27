import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Checkbox,
  Textarea,
  Input,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delete_Others_task, update_others_task } from "../taskreducer/action";
import SubtaskPart from "./SubtaskPart";

const Textname = ({ data,index,update,deleted }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, Setshow] = useState(false);
  const [status, Setstatus] = useState(false);
  const [subtaskvalue, Setsubtaskvalue] = useState("");
    const dispatch = useDispatch()

//  console.log(data)

  const [task, Settask] = useState({
    task_name: data.task_name,
    sub_task: data.sub_task,
    task_completed: data.task_completed,
    task_details: data.task_details,
  });

  const handleUpdate = () => {
    // console.log(data);
    onOpen();
  };
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
    Setsubtaskvalue("")
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
          task_completed: e.target.checked,
        });
      } else {
        Settask({
          ...task,
          task_completed: e.target.checked,
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

  const handleShow = () => {
    if (show == false && data.task_name) {
      Setsubtaskvalue("");
      Setshow(true);
    } else {
      Setshow(false);
    }
  };
  const handleSubmit = () => {
    console.log(task);
    console.log(index);
    console.log(update);
      dispatch(update(task,index));
      onClose()
  };
  const handleDelete = () =>{
    dispatch(deleted(index))
    onClose();
  }
  //   console.log(data);

  const SubTaskChanged =(obj,index) =>{
   let gog =  task.sub_task.map((el,i)=>{
    
        if(i==index){
            return obj
            // console.log(el)
        }
        else{
            return el
        }
    })
    Settask({
        ...task,
        sub_task:gog
    })
    console.log(task)
  }

  return (
    <Box
      size="lg"
      bg="whitesmoke"
      h="5rem"
      borderRadius="1rem"
      _hover={{
        bg: "#eaeaea",
      }}
      w="20rem"
      onClick={() => handleUpdate()}
    >
      <Text
        m="3"
        p="1"
        pl="3"
        cursor="pointer"
        _hover={{
          bg: "#eaeaea",
        }}
      >
        {data.task_name}
      </Text>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.task_name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Checkbox isChecked={task.task_completed} onChange={handleTask}>Mark as Done</Checkbox>

            <Input
              placeholder="Task name"
              name="task_name"
              value={task.task_name}
              onChange={handleTask}
            />

            <Textarea
              mt="2"
              value={task.task_details}
              name="task_details"
              onChange={handleTask}
              placeholder="Add details..."
              size="sm"
            />
            <br></br>
            <br></br>
            <br></br>
            <Text fontWeight="bold">SUBTASKS</Text>
            {task.sub_task.map((el,i) => {
              return (
               <SubtaskPart data={el} key={i} index={i} SubTaskChanged={SubTaskChanged} />
              );
            })}
            {show ? (
              <Flex m="2">
                <Input
                  placeholder="Add SubTask..."
                  name="sub_task"
                  value={subtaskvalue}
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
            <Button colorScheme={"blue"} onClick={() => handleSubmit()}>
              Submit
            </Button>
            <Button colorScheme={"red"} ml="3" onClick={() => handleDelete()}>
              Delete
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Textname;
