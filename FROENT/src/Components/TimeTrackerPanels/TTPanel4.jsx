import {
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

const TTPanel4 = () => {
  return (
    <Tabs variant="unstyled">
      <TabList>
        <Tab>Easy clock in and clock out</Tab>
        <Tab>Add and edit time entries for your whole team</Tab>
        <Tab>Create professional timesheets and reports</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Image src="https://trackingtime.co/wp-content/uploads/2020/08/clockin-clockout.svg" />
        </TabPanel>
        <TabPanel>
          <Image src="https://trackingtime.co/wp-content/uploads/2020/05/time-entrie.svg" />
        </TabPanel>
        <TabPanel>
          <Image src="https://trackingtime.co/wp-content/uploads/2020/03/timesheets-app.svg" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TTPanel4;
