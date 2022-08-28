import {
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
  Box,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { notesDeleted, notesUpdated } from "../taskreducer/action";

const Pernote = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
 const [val,Setval] = useState(data.note);
 const dispatch = useDispatch()
  const handleUpdate = () => {
    onOpen();
  };
  const handleUpdatedvalue = (e) => {
    let updt = {
      note:val
    }
    console.log(data._id,updt)
    dispatch(notesUpdated(data._id,updt))
    onClose();
  };

  const handleDelete = () =>{
   dispatch(notesDeleted(data._id)) 
    onClose();
  }
  return (
    <Box
      onClick={handleUpdate}
      m="2"
      size="lg"
      p="4"
      bg="whitesmoke"
      h="5rem"
      borderRadius="1rem"
      _hover={{
        bg: "#eaeaea",
      }}
      // w="100vh"
    >
      <Text>{data.note}</Text>
      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={val} onChange={(e)=>Setval(e.target.value)} />
            <br></br>
            <br></br>
            <Button onClick={handleUpdatedvalue} colorScheme={'blue'} >Submit</Button>
        
            <Button onClick={handleDelete} ml="2" colorScheme={'red'} >Delete</Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Pernote;
