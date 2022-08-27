import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
 
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Drawerele = () => {
  const dispatch = useDispatch();
  const [show, Setshow] = useState(false);
  const [subtaskvalue, Setsubtaskvalue] = useState("");
  const handleShow = () => {
    if (show == false) {
      Setsubtaskvalue("");
      Setshow(true);
    } else {
      Setshow(false);
    }
  };
  useEffect(() => {
    // onOpen();
  }, []);
  return (
    <Box>
      
    </Box>
  );
};

export default Drawerele;
