import { Box, Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BlogsNavbar = () => {
  const param = window.location.pathname;
  return (
    <Tabs variant="unstyled">
      <Flex
        justify={{
          base: "start",
          sm: "start",
          md: "center",
          lg: "center",
          xl: "center",
          "2xl": "center",
        }}
        gap={5}
        overflow="scroll"
        whiteSpace="nowrap"
        position="fixed"
        zIndex={1}
        bg="white"
        w="100%"
        sx={{
          "::-webkit-scrollbar": {
            h: "5px",
            w: "0",
            borderRadius: "8px",
            bg: `RGBA(0, 0, 0, 0.36)`,
            display: {
              base: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
              "2xl": "none",
            },
          },
        }}
      >
        <Link to="/blog">
          <Tab
            borderBottom={param === "/blog" ? "2px solid #01c3a9" : ""}
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
            borderBottom={param === "/productivity" ? "2px solid #01c3a9" : ""}
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
            borderBottom={param === "/remote-work" ? "2px solid #01c3a9" : ""}
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
            borderBottom={param === "/best-practice" ? "2px solid #01c3a9" : ""}
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
            borderBottom={param === "/resources" ? "2px solid #01c3a9" : ""}
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
