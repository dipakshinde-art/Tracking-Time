import {
  Box,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
  Portal,
} from "@chakra-ui/react";
import React from "react";

import EditForm from "./EditForm.jsx";
const NoteCard = ({ Note, Title, createdate, time, img, weekDays,_id }) => {
  let date = createdate[0] + createdate[1];
  let last = createdate[8] + createdate[9];

  const handleEdit=(e)=>{
    console.log("edit id value",e)
  }

  return (
    <Box>
      <Popover placement="left">
        <PopoverTrigger>
          {weekDays == date || weekDays == last ? (
            <Box
              m="2"
              bg="#3cbcfb"
              borderRadius="5px"
              _hover={{
                opacity: 1,
                cursor: "pointer",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            >
              <Flex>
                <Flex direction="column" p="2">
                  <Box>{Title}</Box>
                  <Box>{Note}</Box>
                </Flex>

                <Spacer />
                <Box p="3">
                  <Box
                    opacity="0"
                    _hover={{
                      opacity: 1,
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
                    </svg>
                  </Box>
                </Box>
              </Flex>
              <Flex p="2" mt="5em">
                <Text fontSize="12px">9.00 am - 10.00 am </Text>
                <Spacer />
                <Box>1 pm</Box>
              </Flex>
            </Box>
          ) : (
            <Text></Text>
          )}
        </PopoverTrigger>
        <Portal >
          <PopoverContent mt="12em" w='30em' >
            <EditForm id={_id}  onClick={()=> handleEdit(_id)}/>
          </PopoverContent>
        </Portal>
      </Popover>

      {/* {weekDays == date || weekDays == last ? (
        <Box
          m="2"
          bg="#3cbcfb"
          borderRadius="5px"
          _hover={{
            opacity: 1,
            cursor: "pointer",
            border: "2px solid black",
            borderRadius: "5px",
          }}
        >
          <Flex>
            <Flex direction="column" p="2">
              <Box>{Title}</Box>
              <Box>{Note}</Box>
            </Flex>

            <Spacer />
            <Box p="3">
              <Box
                opacity="0"
                _hover={{
                  opacity: 1,
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
                </svg>
              </Box>
            </Box>
          </Flex>
          <Flex p="2" mt="5em">
            <Text fontSize="12px">9.00 am - 10.00 am </Text>
            <Spacer />
            <Box>1 pm</Box>
          </Flex>
        </Box>
      ) : (
        <Text></Text>
      )} */}
    </Box>
  );
};

export default NoteCard;
