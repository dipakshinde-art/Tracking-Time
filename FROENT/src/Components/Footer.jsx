import React from "react";
import {
  Box,
  Image,
  Text,
  Input,
  Button,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import css from "./Footer.module.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      {/* <Box className={css.resbox}>
            <Box className={css.resbox1}>
                    <img w="71px" h="84px" src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/footer/tt.svg' />
                    <Text fontSize="35px" fontWeight="700">Get Started</Text>
                    <Text fontWeight="600" color="#7F8488">Sign up today and join thousands of people around the world using TrackingTime to make the most of their time.</Text>
                    <Box className={css.resbtn}>
                        <Input
                            w="265px"
                            h="40px"
                            textColor="black"
                            textAlign="center"
                            _placeholder={{ opacity: 1, color: 'black' }}
                            borderColor="black"
                            color='black'
                            placeholder='Your work Email'
                            fontSize={{ base: "20px", sm: "18px", md: "16px", lg: "14px" }} />
                        <Button className={css.cbtn}
                            bgColor="#00AD95"
                            color="white"
                            w="210px"
                            h="40px"
                            _hover={{ bgColor: "#00AD95" }}
                            fontSize={{ base: "20px", sm: "18px", md: "16px", lg: "14px" }}>
                            START FOR FREE!
                        </Button>
                    </Box>
                    <Box className={css.google}>
                        <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png" w="21px" h="21px" />
                        <a
                            href="/signup">
                            <h3>Sign in with Google</h3>
                        </a>
                    </Box>
                </Box>
                <Box><Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Section 1 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion></Box>
            </Box> */}
      <Box className={css.box}>
        <Box className={css.box1}>
          <Image
            w="71px"
            h="84px"
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/footer/tt.svg"
          />
          <Text fontSize="35px" fontWeight="700">
            Get Started
          </Text>
          <Text fontWeight="600" color="#7F8488">
            Sign up today and join thousands of people around the world using
            TrackingTime to make the most of their time.
          </Text>
          <Box className={css.btn}>
            <Input
              w="265px"
              h="40px"
              textColor="black"
              textAlign="center"
              _placeholder={{ opacity: 1, color: "black" }}
              borderColor="black"
              color="black"
              placeholder="Your work Email"
              fontSize={{ base: "20px", sm: "18px", md: "16px", lg: "14px" }}
            />
            <Button
              className={css.cbtn}
              bgColor="#00AD95"
              color="white"
              w="210px"
              h="40px"
              _hover={{ bgColor: "#00AD95" }}
              fontSize={{ base: "20px", sm: "18px", md: "16px", lg: "14px" }}
            >
              START FOR FREE!
            </Button>
          </Box>
          <Box className={css.google}>
            <Image
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
              w="21px"
              h="21px"
            />
            <a href="/signup">
              <h3>Sign in with Google</h3>
            </a>
          </Box>
        </Box>
        <Box className={css.box2}>
          <Grid className={css.grid} templateColumns="repeat(5,1fr)" gap="30px">
            <Box>
              <h1>Industries</h1>
              <h3>Time tracking for Graphic Designers</h3>
              <h3>Time tracking software for Architects</h3>
              <h3>Time tracking for Remote Workers</h3>
              <h3>Time tracking for Marketing Teams</h3>
              <h3>Time tracking for Freelancers</h3>
            </Box>
            <Box>
              <h1>Product</h1>
              <h3>Plans & Pricing</h3>
              <h3>Integrations</h3>
              <h3>Product Updates</h3>
              <h3>Slack Bot</h3>
              <h3>Microsoft Teams</h3>
            </Box>
            <Box>
              <h1>Features</h1>
              <h3>Online Timesheet For Efficient Companies</h3>
              <h3>Time Tracker for every business</h3>
              <h3>Reports for billing and payroll to reduce</h3>
              <h3>administrative work</h3>
              <h3>Attendance tracker for every business</h3>
              <h3>Project Management Time Tracking Software</h3>
            </Box>
            <Box>
              <h1>Apps</h1>
              <h3>Web App</h3>
              <h3>Time Tracker app for Mac</h3>
              <h3>Time Tracker for Windows</h3>
              <h3>iPhone app</h3>
              <h3>Android app</h3>
              <h3>Time Tracking for Chrome</h3>
              <h3>Time Tracking for Firefox</h3>
              <h3>Time Tracking for Safari</h3>
            </Box>
            <Box>
              <h1>Company</h1>
              <h3>About Us</h3>
              <h3>Blog</h3>
              <h3>Media kit</h3>
              <h3>Terms of service</h3>
              <h3>Privacy Policy</h3>
              <h3>DMCA Policy</h3>
              <h3>Impressum</h3>
            </Box>
            <Box display="flex" flexDirection="column" gap="20px">
              <Box display="flex" fontSize="30px" gap="1rem">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillFacebook />
              </Box>
              <h1>support@trackingtime.com</h1>
              <h3>© 2022 TrackingTime, LLC</h3>
            </Box>
            <Box>
              <h1>Help & Support</h1>
              <h3>Help Center</h3>
              <h3>Developers</h3>
              <h3>Contact us</h3>
            </Box>
            <Box>
              <h1>Choose Language</h1>
              <Menu isOpen={isOpen}>
                <MenuButton
                  as={Text}
                  variant="ghoust"
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                >
                  <h1>English</h1>
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                  <MenuItem>
                    <h1>DEUTSCH</h1>
                  </MenuItem>
                  <MenuItem>
                    <h1>ESPAÑOL</h1>
                  </MenuItem>
                  <MenuItem>
                    <h1>PORTUGUÊS</h1>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
