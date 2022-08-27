import React, { useState, useRef } from "react";
import styled from "./Navbar.module.css";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Text,
  useDisclosure,
  Icon,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef()
  return (
    <nav className={styled.navbar}>
     
      <div className={styled.brand}>
        <a href="/"><img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg" alt="" /></a>
        <div className={styled.ham}><Button ref={btnRef} onClick={onOpen} ><GiHamburgerMenu /></Button></div>
      </div>
      {/* <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerBody padding="3rem" lineHeight="3rem">
            <Text className={styled.big}>INTEGRATIONS</Text>
            <Text className={styled.big}>BLOG</Text>
            <Text className={styled.big}>FEATURES</Text>
            <Text className={styled.lis}>Time Traker</Text>
            <Text className={styled.lis}>Project Management</Text>
            <Text className={styled.lis}>Online Timesheet</Text>
            <Text className={styled.lis}>Time crads</Text>
            <Text className={styled.lis}>Attendance tracking</Text>
            <Text className={styled.lis}>Time reporting</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
      <div className={styled.full}>
        <ul>
          <li><a href="/integration">INTEGRATIONS </a></li>
          <li><a href="/blog">BLOG</a></li>
          <li>
            <Menu isOpen={isOpen}>
              <MenuButton
                as={Text}
                variant="ghoust"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                
              >
                <a className={styled.cat}>FEATURES <Icon w={5} h={5} color="#00AD95" as={ChevronDownIcon} /></a>
              </MenuButton>
              <MenuList className={styled.list} onMouseEnter={onOpen} onMouseLeave={onClose}  >
                <Box><Text className={styled.li}><a href="/features/time-tracker">Time Traker</a></Text></Box>
                <Box><Text className={styled.li}><a href=""></a> Project Management</Text></Box>
                <Box><Text className={styled.li}>Online Timesheet</Text></Box>
                <Box><Text className={styled.li}>Time crads</Text></Box>
                <Box><Text className={styled.li}>Attendance tracking</Text></Box>
                <Box><Text className={styled.li}>Time reporting</Text></Box>
              </MenuList>
            </Menu>
          </li>
          <li>
            <Button
              w="140px"
              h="36px"
              padding="10px 0"
              _hover={{ background: "#00AD95", color: "white" }}
              borderColor="#00AD95"
              color="#00AD95"
              border="2px"
              variant="outline"
              fontSize="14px"
            >
              <a href="/signup" className={styled.cat}>TRY IT FREE</a>
            </Button>
          </li>
          <li>
            <Button
              w="140px"
              h="36px"
              padding="10px 0"
              bg="#00AD95"
              _hover={{ background: "white", color: "#00AD95" }}
              color="white"
              border="2px"
              borderColor="#00AD95"
              variant="outline"
              fontSize="14px"
            >
              <a href="/login" className={styled.cat}>LOGIN</a>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
