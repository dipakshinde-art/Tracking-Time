import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import Innavbr from "../Components/Innavbar";
import Content from "../Components/Content";

const Projects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box>
        <Button colorScheme="blue" onClick={onOpen}>
          Open
        </Button>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent border={"1px"}>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box>
        <Innavbr />
      </Box>
      <Box>
        <Content />
      </Box>
    </Box>
  );
};

export default Projects;
