import React from "react";
import { Box } from "@chakra-ui/react";
import Innavbr from "../Components/Innavbar";
import Content from "../Components/Content";
import WithSubnavigation from "../Components/Navbar/Navbar";

const Projects = () => {
  return (
    <> <Box
    py={{ base: 2 }}
    px={{ base: 4 }}
    width={["15%", "25%", "50%", "100%"]}
  >
    <WithSubnavigation />
  </Box>
    <Box>
      <Box>
        <Innavbr />
      </Box>
      <Box>
        <Content />
      </Box>
    </Box>
    </>
  );
};

export default Projects;
