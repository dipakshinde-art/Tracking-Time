import {
  Flex,
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
      <Flex
        direction={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        p={{
          base: "1rem",
          sm: "1rem 2rem",
          md: "1rem 1rem 5rem 5rem",
          lg: "1rem 5%",
          xl: "1rem 10%",
          "2xl": "1rem 10%",
        }}
      >
        <Flex
          direction="column"
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "90%",
            xl: "90%",
            "2xl": "90%",
          }}
          gap={2}
        >
          <Tab
            transition="500ms"
            w="100%"
            p="1.2rem 3rem"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            borderRadius="5px"
            fontSize={{
              base: "0.8rem",
              sm: "1rem",
              md: "0.9rem",
              lg: "1rem",
              xl: "1.1rem",
              "2xl": "1.1rem",
            }}
            fontWeight={700}
            _selected={{ color: "white", bg: "black" }}
          >
            Easy clock in and clock out
          </Tab>
          <Tab
            transition="500ms"
            w="100%"
            p={{
              base: "1rem",
              sm: "1rem",
              md: "1.2rem 2rem",
              lg: "1.2rem 1.5rem",
              xl: "1.2rem 3rem",
              "2xl": "1.2rem 3rem",
            }}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            borderRadius="5px"
            fontSize={{
              base: "0.8rem",
              sm: "1rem",
              md: "0.9rem",
              lg: "1rem",
              xl: "1.1rem",
              "2xl": "1.1rem",
            }}
            fontWeight={700}
            _selected={{ color: "white", bg: "black" }}
          >
            Add and edit time entries for your whole team
          </Tab>
          <Tab
            transition="500ms"
            w="100%"
            p={{
              base: "1rem",
              sm: "1rem",
              md: "1.2rem 2rem",
              lg: "1.2rem 1.5rem",
              xl: "1.2rem 3rem",
              "2xl": "1.2rem 3rem",
            }}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            borderRadius="5px"
            fontSize={{
              base: "0.8rem",
              sm: "1rem",
              md: "0.9rem",
              lg: "1rem",
              xl: "1.1rem",
              "2xl": "1.1rem",
            }}
            fontWeight={700}
            _selected={{ color: "white", bg: "black" }}
          >
            Create professional timesheets and reports
          </Tab>
        </Flex>

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
      </Flex>
    </Tabs>
  );
};

export default TTPanel4;
