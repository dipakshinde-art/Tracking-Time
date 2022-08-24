import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const DesktopSubNav = ({ label, href,col }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      rounded={"sm"}
      color={col}
      _hover={{ bg: useColorModeValue("", "") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} fontWeight={500} color={col}>
            {label}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        ></Flex>
      </Stack>
    </Link>
  );
};

export default DesktopSubNav;
