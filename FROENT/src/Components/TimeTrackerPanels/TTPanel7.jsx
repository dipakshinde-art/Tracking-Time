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
    <Flex>
      {panelData.map((item, index) => (
        <Link to={item.link} key={index}>
          <Box>
            <Image src={item.image} />
          </Box>
          <Text>{item.title}</Text>
          <Text>{item.subTitle}</Text>
        </Link>
      ))}
    </Flex>
  );
};

export default TTPanel7;
