import React from "react";
import css from "./Landing.module.css";
import { Box, Button, Input, Text, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Landingpage = () => {
  const nav = useNavigate();
  return (
    <>
      <Navbar />
      <div className={css.main}>
        <Box
          w="60%"
          margin="auto"
          textAlign="center"
          lineHeight="50px"
          marginTop="90px"
        >
          <Text
            fontSize={{ base: "11px", sm: "15px", md: "15px", lg: "11px" }}
            letterSpacing="2px"
            fontWeight="bold"
            color="#00AD95"
          >
            TRACKINGTIME TIME TRACKER SOFTWARE
          </Text>
          <Text
            fontSize={{ base: "20px", sm: "18px", lg: "16px" }}
            letterSpacing="2px"
            fontWeight="900"
          >
            SET AND FORGET TIME TRACKING
          </Text>
          <Text
            fontSize="65px"
            lineHeight="70px"
            letterSpacing="2px"
            fontWeight="700"
          >
            Bring your productivity to the next level.
          </Text>
        </Box>
        <Flex
          margin="20px 0 0 0 "
          width="100%"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          gap="20px"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Input
              w={{ base: "265px", sm: "900px", md: "700px", lg: "265px" }}
              h={{ base: "40px", sm: "70px", md: "60px", lg: "40px" }}
              textColor="black"
              _placeholder={{ opacity: 1, color: "black", textAlign: "center" }}
              borderColor="black"
              color="black"
              placeholder="Your work Email"
            />
          </Box>
          <Box>
            <Button
              bgColor="#00AD95"
              color="white"
              fontSize="13px"
              letterSpacing="2px"
              w={{ base: "255px", sm: "900px", md: "700px", lg: "200px" }}
              h={{ base: "40px", sm: "70px", md: "60px", lg: "40px" }}
              _hover={{ bgColor: "#00AD95" }}
            >
              START FOR FREE!
            </Button>
          </Box>
        </Flex>
        <Flex
          justifyContent="center"
          gap="13px"
          alignItems="center"
          margin="30px 0 0 0"
        >
          <Image
            w="21px"
            h="21px"
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
            alt=""
          />
          <Text
            fontSize="13px"
            textDecoration="underline"
            fontWeight="bold"
            _hover={{ color: "#00AD95" }}
          >
            <a href="">Sign in with Google</a>
          </Text>
        </Flex>
        <Box w="90%" h="90%" margin="auto">
          <Image
            objectFit="contain"
            objectPosition="-150px"
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/ilus-header-2.svg"
          />
        </Box>
        <div className={css.slider_outer}>
          <div className={css.slider}>
            <Text fontSize="16px" color="#7F8488" fontWeight="600">
              Companies of all shapes and sizes use TrackingTime:
            </Text>
            <div className={css.slide_track}>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo2.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo3.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo4.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo5.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo6.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo7.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo8.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo9.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo10.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo11.jpg"
                  alt=""
                />
              </div>

              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo2.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo3.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo4.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo5.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo6.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo7.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo8.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo9.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo10.jpg"
                  alt=""
                />
              </div>
              <div className={css.slide}>
                <img
                  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/logos/color/logo11.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={css.fea}>
          <div>
            <Text fontSize="18px" fontWeight="extrabold">
              THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.
            </Text>
          </div>
          <div>
            <div className={css.fea_grid}>
              <div>
                <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-1.svg" />
              </div>
              <div>
                <h3>Measure your team’s productivity</h3>
              </div>
              <div>
                <p>
                  Get a record of the worked hours and keep your projects in
                  order, be abreast of ongoing or completed projects with our
                  super friendly app.
                </p>
              </div>
            </div>
            <div className={css.fea_grid}>
              <div>
                <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-2.svg" />
              </div>
              <div>
                <h3>The most flexible reporting engine</h3>
              </div>
              <div>
                <p>
                  Project budgeting, client billing, payroll, productivity
                  analytics and much more: No matter what kind of reports you
                  need, TrackingTime has got you covered.
                </p>
              </div>
            </div>
            <div className={css.fea_grid}>
              <div>
                <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-3.svg" />
              </div>
              <div>
                <h3>Monitor your team’s workload, in real time</h3>
              </div>
              <div>
                <p>
                  See every work in progress and measure the productivity of
                  your team by monitoring them in real time
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={css.addtime}>
          <div>
            <img
              width="231px"
              height="140px"
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/grupo.svg"
              alt=""
            />
            <div className={css.addchild1}>
              <h2>Add time tracking to your favorite business apps</h2>
            </div>
            <div className={css.addchild2}>
              <p>
                No matter where your employees work, TrackingTime works with
                them. Install the TrackingTime Button for Chrome and Firefox and
                track time right within the productivity apps your employees use
                everyday.
              </p>
            </div>
            <Button
              _hover={{ bgColor: "black", color: "white" }}
              variant="outline"
              colorScheme="black"
              border="2px"
              w="140px"
              h="36px"
              fontSize="11px"
              fontWeight="extrabold"
              letterSpacing="2px"
              onClick={() => nav("/integration")}
            >
              SEE ALL
            </Button>
          </div>
          <div className={css.apps}>
            <div>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/asana.png"
                alt=""
              />
              <h3>Asana</h3>
              <p>
                Asana puts tasks and conversations together to enable teamwork
                without email.
              </p>
            </div>
            <div>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/trello.png"
                alt=""
              />
              <h3>Trello</h3>
              <p>
                Trello is a collaboration tool that organizes your projects into
                boards.
              </p>
            </div>
            <div>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/todoist.png"
                alt=""
              />
              <h3>Todoist</h3>
              <p>
                Todoist is a task manager thats useful, fast and easy to use.
              </p>
            </div>
            <div>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/smartsheet.png"
                alt=""
              />
              <h3>Smartsheet</h3>
              <p>
                Smartsheet is a web-based project and task management and work
                collaboration software.
              </p>
            </div>
          </div>
        </div>
        <div className={css.cards}>
          <div>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-1.svg"
              alt=""
            />
            <h3>Timecards Approval</h3>
            <p>Track clock in and out times with no effort.</p>
          </div>
          <div>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-2.svg"
              alt=""
            />
            <h3>Bugeting</h3>
            <p>Keep your projects on time and budget.</p>
          </div>
          <div>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-3.svg"
              alt=""
            />
            <h3>Work schedules</h3>
            <p>Specify when your employees are expected to be at their job.</p>
          </div>
          <div>
            <img
              src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-4.svg"
              alt=""
            />
            <h3>Timesheet audits</h3>
            <p>Avoid data inconsistencies with just one click.</p>
          </div>
        </div>
        <div className={css.end}>
          <div>
            <img
              src="https://i.postimg.cc/fbYjyZdg/Screenshot-1183.png"
              alt=""
            />
          </div>
          <div>
            <div>
              <h2>Get professional timesheets done in no time!</h2>
              <p>
                Sign up today and join thousands of people around the world
                using TrackingTime to simplify their timesheets.
              </p>
            </div>
            <div className={css.btn2}>
              <Input
                w="265px"
                h="40px"
                textColor="black"
                textAlign="center"
                _placeholder={{ opacity: 1, color: "black" }}
                borderColor="black"
                color="black"
                placeholder="Your work Email"
              />
              <Button
                className={css.cbtn}
                bgColor="#00AD95"
                color="white"
                w="210px"
                h="40px"
                _hover={{ bgColor: "#00AD95" }}
              >
                START FOR FREE!
              </Button>
            </div>
            <div className={css.glogo}>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
                alt=""
              />
              <a href="/signup">
                <h3>Sign in with Google</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landingpage;
