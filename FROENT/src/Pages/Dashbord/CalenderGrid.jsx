import { Box, Divider, Flex, Grid, GridItem, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ManualClose from "./Form.jsx";
import axios from "axios";
import NoteCard from "../../Calender/NoteCard.jsx";
const CalenderGrid = ({ weekDays }) => {
  const [note, setNotes] = useState([]);

  //  console.log(note);
  const getNotes = () => {
    axios.get("https://trackime.herokuapp.com/note/list").then((response) => {
      // console.log(response);
      setNotes(response.data);
    });
  };
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <Grid
        templateColumns="repeat(1, 70px 1fr 1fr 1fr 1fr 1fr 70px)"
        gap={0.1}
        border="0.5px solid #ccc"
      >
        <GridItem w="100%" h="100vh" border="1px solid #ccc" textAlign="center">
          <Box>{weekDays[0].weekDayName}</Box>
          <Box>{weekDays[0].date}</Box>
          <Divider />

          <Box
            bg="#f3f3f3"
            opacity="1"
            border="1px solid #ccc"
            borderRadius="5px"
            m="10px"
          >
            <ManualClose today={weekDays[0].date}  getNotes={getNotes} />
          </Box>
          <Box>
            {note.map((item) => {
              return (
                <NoteCard
                  key={item._id}
                  {...item}
                  weekDays={weekDays[0].date}
                  getNotes={getNotes}
                />
              );
            })}
          </Box>
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc">
          <Flex>
            <Box p="3">{weekDays[1].weekDayName}</Box>
            <Spacer />
            <Box p="3">{weekDays[1].date}</Box>
          </Flex>{" "}
          <Divider />
          <Box
            size="sm"
            m="10px"
            align="center"
            borderRadius="5px"
            color="#6c6c6c"
            bg="#f3f3f3"
            opacity="1"
            border="1px solid #ccc"
          >
            <ManualClose today={weekDays[1].date} getNotes={getNotes}/>
          </Box>
          <Box>
            {note.map((item) => {
              return (
                <NoteCard
                  key={item._id}
                  {...item}
                  weekDays={weekDays[1].date}
                  getNotes={getNotes}
                />
              );
            })}
          </Box>
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc">
          {" "}
          <Flex>
            <Box p="3">{weekDays[2].weekDayName}</Box>
            <Spacer />
            <Box p="3">{weekDays[2].date}</Box>
          </Flex>{" "}
          <Divider />{" "}
          <Box
            size="sm"
            m="10px"
            align="center"
            borderRadius="5px"
            color="#6c6c6c"
            bg="#f3f3f3"
            opacity="1"
            border="1px solid #ccc"
          >
            <ManualClose today={weekDays[2].date} getNotes={getNotes} />
          </Box>
          <Box>
            {note.map((item) => {
              return (
                <NoteCard
                  key={item._id}
                  {...item}
                  weekDays={weekDays[2].date}
                  getNotes={getNotes}
                />
              );
            })}
          </Box>
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc">
          {" "}
          <Flex>
            <Box p="3">{weekDays[3].weekDayName}</Box>
            <Spacer />
            <Box p="3">{weekDays[3].date}</Box>
          </Flex>{" "}
          <Divider />{" "}
          <Box
            size="sm"
            m="10px"
            align="center"
            borderRadius="5px"
            color="#6c6c6c"
            bg="#f3f3f3"
            opacity="1"
            border="1px solid #ccc"
          >
            <ManualClose today={weekDays[3].date} getNotes={getNotes} />
          </Box>
          <Box>
            {note.map((item) => {
              return (
                <NoteCard
                  key={item._id}
                  {...item}
                  weekDays={weekDays[3].date}
                  getNotes={getNotes}
                />
              );
            })}
          </Box>
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc">
          {" "}
          <Flex>
            <Box p="3">{weekDays[4].weekDayName}</Box>
            <Spacer />
            <Box p="3">{weekDays[4].date}</Box>
          </Flex>{" "}
          <Divider />
          <Box
            size="sm"
            m="10px"
            align="center"
            borderRadius="5px"
            color="#6c6c6c"
            bg="#f3f3f3"
            opacity="1"
            border="1px solid #ccc"
          >
            <ManualClose today={weekDays[4].date} getNotes={getNotes} />
          </Box>
          <Box>
            {note.map((item) => {
              return (
                <NoteCard
                  key={item._id}
                  {...item}
                  weekDays={weekDays[4].date}
                  getNotes={getNotes}
                />
              );
            })}
          </Box>
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc">
          {" "}
          <Flex>
            <Box p="3">{weekDays[5].weekDayName}</Box>
            <Spacer />
            <Box p="3">{weekDays[5].date}</Box>
          </Flex>{" "}
          <Divider />{" "}
          <Box
            size="sm"
            m="10px"
            align="center"
            borderRadius="5px"
            color="#6c6c6c"
            bg="#f3f3f3"
            opacity="1"
            border="1px solid #ccc"
          >
            <ManualClose today={weekDays[5].date} getNotes={getNotes} />
          </Box>
          <Box>
            {note.map((item) => {
              return (
                <NoteCard
                  key={item._id}
                  {...item}
                  weekDays={weekDays[5].date}
                  getNotes={getNotes}
                />
              );
            })}
          </Box>
        </GridItem>
        <GridItem w="100%" h="100vh" border="1px solid #ccc" textAlign="center">
          <Box>{weekDays[6].weekDayName}</Box>
          <Box>{weekDays[6].date}</Box>
          <Divider />

          <Box
            bg="#f3f3f3"
            opacity="1"
            border="1px solid #ccc"
            borderRadius="5px"
            m="10px"
          >
            {" "}
            <ManualClose today={weekDays[6].date} getNotes={getNotes} />
          </Box>
          <Box>
            {note.map((item) => {
              return (
                <NoteCard
                  key={item._id}
                  {...item}
                  weekDays={weekDays[6].date}
                  getNotes={getNotes}
                />
              );
            })}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default CalenderGrid;
