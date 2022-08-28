import React, { useEffect } from "react";
import {
  Box,
  Text,
  Radio,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Accordion,
  AccordionIcon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTaskApi,
  othersTaskApi,
  personalTaskApi,
  professionalTaskApi,
} from "../taskreducer/action";
import WithSubnavigation from "./Navbar/Navbar";

const List = () => {
  let { tasks, Personal_task, Professional_task, Others_task, filter } =
    useSelector((state) => state.task);
  if (filter) {
    tasks = tasks.filter((el) => el.task_completed);
    Personal_task = Personal_task.filter((el) => el.task_completed);
    Professional_task = Professional_task.filter((el) => el.task_completed);
    Others_task = Others_task.filter((el) => el.task_completed);
  } else {
    tasks = tasks;
    Personal_task = Personal_task;
    Professional_task = Professional_task;
    Others_task = Others_task;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(filter);
  }, [filter]);

  useEffect(() => {
    if (tasks.length === 0) dispatch(getTaskApi());
    if (Professional_task.length === 0) dispatch(professionalTaskApi());
    if (Others_task.length === 0) dispatch(othersTaskApi());
    if (Personal_task.length === 0) dispatch(personalTaskApi());
  }, [
    tasks.length,
    Personal_task.length,
    Professional_task.length,
    Others_task.length,
  ]);

  return (
    <>      
      <Box p="3">
        {tasks.map((el, i) => {
          return (
            <Box key={i}>
              <Text
                m="3"
                p="1"
                pl="3"
                cursor="pointer"
                _hover={{
                  bg: "whitesmoke",
                }}
              >
                {el.task_name}
              </Text>
            </Box>
          );
        })}

        <Accordion allowMultiple border="1px solid white">
          <AccordionItem m="2">
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box textAlign="left">Personal</Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Personal_task.map((el, i) => {
                return (
                  <Box key={i}>
                    <Text
                      m="3"
                      p="1"
                      pl="3"
                      cursor="pointer"
                      _hover={{
                        bg: "#eaeaea",
                      }}
                    >
                      {el.task_name}
                    </Text>
                  </Box>
                );
              })}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem m="2">
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box textAlign="left">Professional</Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Professional_task.map((el, i) => {
                return (
                  <Box key={i}>
                    <Text
                      m="3"
                      p="1"
                      pl="3"
                      cursor="pointer"
                      _hover={{
                        bg: "#eaeaea",
                      }}
                    >
                      {el.task_name}
                    </Text>
                  </Box>
                );
              })}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem m="2">
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box textAlign="left">Others</Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Others_task.map((el, i) => {
                return (
                  <Box key={i}>
                    <Text
                      m="3"
                      p="1"
                      pl="3"
                      cursor="pointer"
                      _hover={{
                        bg: "#eaeaea",
                      }}
                    >
                      {el.task_name}
                    </Text>
                  </Box>
                );
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default List;


{/* <Box
        py={{ base: 2 }}
        px={{ base: 4 }}
        width={["15%", "25%", "50%", "100%"]}
      >
        <WithSubnavigation />
      </Box> */}