import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notesRead } from "../taskreducer/action";
import Pernote from "./Pernote";

const Shownotes = () => {
  const { Notes } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  console.log(Notes);
  

  useEffect(() => {
    if (Notes.length === 0) dispatch(notesRead());
  }, [Notes.length]);
  return (
    <Box>
      {Notes.map((el,i) => {
        return (
          <Pernote data={el} key={i} />
        );
      })}
     
    </Box>
  );
};

export default Shownotes;
