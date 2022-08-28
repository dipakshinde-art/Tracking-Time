import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  MenuItem,
  MenuDivider,
  MenuList,
  Avatar,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import Desktopnav from "./Desktopnav";

const NAV_ITEMS = [
  {
    label: "Hours",
    href: "/dashboard",
    col: "#579ae7",
  },
  {
    label: "Projects",
    href: "/project",
    col: "#282828",
  },
  {
    label: "Reports",
    href: "#",
    col: "#282828",
    children: [
      {
        label: "TimeSheet",
        href: "#",
        img: "",
      },
      {
        label: "DashBoard",
        href: "#",
        img: "",
      },
      {
        label: "User Reports",
        href: "#",
        img: "",
      },
      {
        label: "Projects Reports",
        href: "#",
        img: "",
      },
      {
        label: "Pace",
        href: "#",
        img: "",
      },
      {
        label: "Shared Reports",
        href: "#",
        img: "",
      },
    ],
  },
  {
    label: "Manage",
    href: "#",
    col: "#282828",
    children: [
      {
        label: "Team",
        href: "#",
        img: "",
      },
      {
        label: "Work Shedule",
        href: "#",
        img: "BsClockHistory",
      },
      {
        label: "Client",
        href: "#",
        img: "",
      },
      {
        label: "Custome Field",
        href: "#",
        img: "",
      },
      {
        label: "Add Once",
        href: "#",
        img: "",
      },
    ],
  },
];

export default function WithSubnavigation() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "white.800")}
        color={useColorModeValue("white.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"none"}
        _hover={{
          cursor: "pointer",
        }}
        // borderColor={useColorModeValue("white.200", "white.100")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            // fontFamily={"heading"}
            fontFamily="icomoon"
            fontSize="22px"

            // color={useColorModeValue("gray.800", "white")}
          >
            TRACKING<span color="#282828">TIME</span>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Desktopnav NAV_ITEMS={NAV_ITEMS} />
          </Flex>

          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            border="1px"
            borderColor="gray.200"
            borderRadius="full"
            ml="10"
            p="1"
            _hover={{
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 50 50"
            >
              <path
                fill="currentColor"
                d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13s13 5.8 13 13s-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11s11-4.9 11-11s-4.9-11-11-11z"
              />
              <path
                fill="currentColor"
                d="m32.682 31.267l8.98 8.98l-1.414 1.414l-8.98-8.98z"
              />
            </svg>
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Box
            _hover={{
              opacity: 0.1,
              cursor: "pointer",
            }}
          >
            <svg
              width="2em"
              height="1.7em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"
              />
            </svg>{" "}
          </Box>

          <Box
            w="5"
            h="6"
            align="center"
            color="#282828"
            bg="#f5f4f4"
            borderRadius="full"
            cursor="pointer"
          >
            +
          </Box>
          <Button
            colorScheme="teal"
            variant="outline"
            size="sm"
            _hover={{
              background: "teal",
              color: "white",
            }}
          >
            Get Pro
          </Button>
          <span>
            <svg
              width="1.5em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="1 1 26 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
              />
            </svg>
          </span>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}
