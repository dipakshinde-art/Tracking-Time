import React from "react";
import styled from "./Navbar.module.css";
import { 
  Box,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Text,  useDisclosure,Icon } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav=useNavigate();
  return (
    <div className={styled.main}>
      <div className={styled.innder_div}>
        <div className={styled.logo_div}  onClick={()=>nav("/")}>
          <img
            width="190px"
            height="19.78px"
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg"
            alt="Traking time"
           
          />
        </div>
        <div className={styled.catogories_outer}>
          <div className={styled.caaaaa}>
            <div>
              <h5 className={styled.cat}>INTEGRATIONS</h5>
            </div>
            <div>
              <Link to="/blog">
                <h5 className={styled.cat}>BLOG</h5>
              </Link>
            </div>
            <div>
              <Menu isOpen={isOpen}>
                <MenuButton
                  as={Text}
                  variant="ghoust"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  <h5 className={styled.cat}>FEATURES <Icon w={5} h={5} color="#00AD95" as={ChevronDownIcon}/></h5>
                  
                </MenuButton>
                <MenuList className={styled.list} onMouseEnter={onOpen} onMouseLeave={onClose} >
                  <Box><Text className={styled.li}>Time Traker</Text></Box>
                  <Box><Text className={styled.li}>Project Management</Text></Box>
                  <Box><Text className={styled.li}>Online Timesheet</Text></Box>
                  <Box><Text className={styled.li}>Time crads</Text></Box>
                  <Box><Text className={styled.li}>Attendance tracking</Text></Box>
                  <Box><Text className={styled.li}>Time reporting</Text></Box>
                </MenuList>
              </Menu>
            </div>
            <div>
              <Button
                w="140px"
                h="36px"
                padding="10px 0"
                _hover={{ background: "#00AD95", color: "white" }}
                borderColor="#00AD95"
                color="#00AD95"
                border="2px"
                variant="outline"
              >
                <h5 className={styled.cat}>TRY IT FREE</h5>
              </Button>
            </div>
            <div>
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
              >
                <h5 className={styled.cat}>LOGIN</h5>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
