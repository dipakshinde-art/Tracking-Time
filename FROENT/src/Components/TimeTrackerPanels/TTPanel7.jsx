import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const TTPanel7 = () => {
  const panelData = [
    {
      image:
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-1.svg",
      title: "Timecards Approval",
      subTitle: "Track clock in and out times with no effort.",
      link: "https://trackingtime.co/features/time-cards",
    },
    {
      image:
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-2.svg",
      title: "Budgeting",
      subTitle: "Keep your projects on time and budget.",
      link: "https://trackingtime.co/features/project-management",
    },
    {
      image:
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-3.svg",
      title: "Work schedules",
      subTitle: "Specify when your employees are expected to be at their job.",
      link: "https://trackingtime.co/features/attendance-tracker",
    },
    {
      image:
        "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-4.svg",
      title: "Timesheet Audits",
      subTitle: "Avoid data inconsistencies with just one click.",
      link: "https://trackingtime.co/features/online-timesheet",
    },
  ];
  return (
    <Flex
      justify="center"
      gap={{ base: "4", sm: "4", md: "0", lg: "0", xl: "0" }}
      bg="white"
      p={{
        base: "4rem 2%",
        sm: "4rem 3%",
        md: "4rem 5%",
        lg: "4rem 10%",
        xl: "4rem 10rem",
        "2xl": "4rem 10rem",
      }}
      direction={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
        "2xl": "column",
      }}
    >
      {panelData.map((item, index) => (
        <Box key={index} align="center" p="0 1rem">
          <Link to={item.link}>
            <Box w="90%">
              <Image h="10rem" src={item.image} />
            </Box>
            <Text fontSize="1.5rem" fontWeight={600}>
              {item.title}
            </Text>
            <Text fontSize="0.9rem">{item.subTitle}</Text>
          </Link>
        </Box>
      ))}
    </Flex>
  );
};

export default TTPanel7;
