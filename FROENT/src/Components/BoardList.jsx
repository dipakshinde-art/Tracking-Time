import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTaskApi } from "../taskreducer/action";

const BoardList = () => {
    let { tasks,filter } = useSelector((state) => state.task);
    if(filter){
     tasks =  tasks.filter((el)=>(el.task_completed))
    }
    else{
      tasks = tasks
    }
  const dispatch = useDispatch();
  useEffect(() => {
    if (tasks.length === 0) dispatch(getTaskApi());
  }, [tasks.length]);

  return (
    <Box>
      {tasks.map((el, i) => {
        return (
          <Box
            key={i}
            size="lg"
            bg="whitesmoke"
            h="5rem" 
            _hover={{
                bg: "#eaeaea",
              }}
            borderRadius="1rem"
            w="20rem"
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
              {el.task_name}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default BoardList;
