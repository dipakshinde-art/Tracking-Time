import { Box, Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BlogsNavbar = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
      <Flex
        align="center"
        justify="center"
        gap={5}
        overflow="scroll"
        position="fixed"
        zIndex={1}
        bg="white"
        w="100%"
        sx={{ "::-webkit-scrollbar": { display: "none" } }}
      >
        <Link to="/blog">
          <Tab
            letterSpacing="1px"
            fontSize="0.8rem"
            fontWeight={600}
            p="1.4rem 0"
            m="0 1.1rem"
            transition="150ms"
            _hover={{ borderBottom: "2px solid gray" }}
          >
            BLOG
          </Tab>
        </Link>

        <Link to="/productivity">
          <Tab
            letterSpacing="1px"
            fontSize="0.8rem"
            fontWeight={600}
            p="1.4rem 0"
            m="0 1.1rem"
            transition="150ms"
            _hover={{ borderBottom: "2px solid gray" }}
          >
            PRODUCTIVITY
          </Tab>
        </Link>

        <Link to="/remote-work">
          <Tab
            letterSpacing="1px"
            fontSize="0.8rem"
            fontWeight={600}
            p="1.4rem 0"
            m="0 1.1rem"
            transition="150ms"
            _hover={{ borderBottom: "2px solid gray" }}
          >
            REMOTE WORK
          </Tab>
        </Link>

        <Link to="/best-practice">
          <Tab
            letterSpacing="1px"
            fontSize="0.8rem"
            fontWeight={600}
            p="1.4rem 0"
            m="0 1.1rem"
            transition="150ms"
            _hover={{ borderBottom: "2px solid gray" }}
          >
            BEST PRACTICES
          </Tab>
        </Link>

        <Link to="/resources">
          <Tab
            letterSpacing="1px"
            fontSize="0.8rem"
            fontWeight={600}
            p="1.4rem 0"
            m="0 1.1rem"
            transition="150ms"
            _hover={{ borderBottom: "2px solid gray" }}
          >
            RESOURCES
          </Tab>
        </Link>
      </Flex>
    </Tabs>
  );
};

export default BlogsNavbar;
