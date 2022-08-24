import { Box } from "@chakra-ui/react";
import React from "react";
import Calender from "../../Calender/Calender";

import WithSubnavigation from "../../Components/Navbar/Navbar";
import CalenderGrid from "./CalenderGrid";
import ScrollCalender from "./ScrollCalender";

const Dashboard = () => {
  return (
    <>
      <Box py={{ base: 2 }} px={{ base: 4 }}>
        <WithSubnavigation />
        <ScrollCalender />
      </Box>
      {/* <CalenderGrid /> */}
      <Calender />
    </>
  );
};

export default Dashboard;
