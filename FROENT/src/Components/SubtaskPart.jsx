import { Box, Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const SubtaskPart = ({data,index,SubTaskChanged}) => {
    const [visible, Setvisible] = useState(false);
    const [input, Setinput] = useState(data);

    const Subtaskchg = (e) =>{
        let {type,value,checked} = e.target;
        if(type === "checkbox"){
            Setinput({
                ...input,
                sub_task_status:checked
            })
        }
        else{

            Setinput({
                ...input,
                subTask:value
            })
        }
        
        Setvisible(true)
    }
    const handleChanges = () => {
        // console.log(index)
        // console.log(input)
        SubTaskChanged(input,index)
    }
    


  return (
    <Box>
      <Flex>
        <Checkbox size="lg" isChecked={input.sub_task_status} onChange={Subtaskchg}></Checkbox>
        <Input ml="2" value={input.subTask} onChange={Subtaskchg} />
        {visible ? (
          <Button colorScheme={"blue"} onClick={() => handleChanges()}>
            Sub
          </Button>
        ) : (
          ""
        )}
      </Flex>
    </Box>
  );
};

export default SubtaskPart;
