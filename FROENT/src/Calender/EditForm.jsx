import { DeleteIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Button,
  Box,
  Link,
  Text,
  Divider,
  Avatar,
  Input,
  HStack,
  InputGroup,
  InputLeftElement,
  Flex,
  Switch,
  Center,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import { MdOutlineNotes } from "react-icons/md";
import styles from "./Col.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditForm({ id }) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setendTime] = useState("");
  const [date, setCreateDate] = useState("");

  const [Title, setTitle] = useState("");
  const [Note, setNote] = useState("");

  const HandleUpdate = () => {
    let payload = {
      Title,
      Note,
    };
    axios
      .patch(`http://localhost:5000/note/edit/${id}`, payload)
      .then((responce) => {
        //  console.log(responce);
        window.location.reload(false);
        alert("NOTE Updated");
      });
  };
  const handleEdit = () => {
    // console.log("editform id", id);
    axios.get(`http://localhost:5000/note/info/${id}`).then((responce) => {
      //console.log(responce.data.note);
      if (responce.data.note) {
        setTitle(responce.data.note.Title);
        setNote(responce.data.note.Note);
        setStartTime(responce.data.note.createdate);
      }
    });
  };

  const handleDelete = () => {
   // console.log("deleteform id", id);
    axios
      .delete(`http://localhost:5000/note/delete/${id}`)
      .then((response) => {
        alert("Deleted");
        // console.log(response.data);
        window.location.reload(false);
        // navigate("/note/list", { replace: true });
      })
      .catch((err) => alert("Not ABle to Delete"));
  };
  return (
    <Box mt="10px" onClick={() => handleEdit()}>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>
        <Avatar src="https://bit.ly/broken-link" size="sm" mr="3" />
        username
      </PopoverHeader>
      <PopoverBody>
        <Box p="2">
          <Input
            placeholder="Project/Task"
            width="26em"
            height="4em"
            ml="4"
            mb="4"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <HStack ml="4" mb="4">
            <Box>
              <Input
                type="date"
                width="8em"
                height="3em"
                onChange={(e) => setStartTime(e.target.value)}
              />
            </Box>
            <Box>
              <Input
                type="date"
                width="8em"
                height="3em"
                onChange={(e) => setendTime(e.target.value)}
              />
            </Box>
            <Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<TimeIcon color="gray.500" />}
                />
                <Input width="9em" height="3em" placeholder="1:00" />
              </InputGroup>
            </Box>
          </HStack>

          <InputGroup>
            <InputLeftElement
              children={<MdOutlineNotes color="gray.500" />}
              ml="4"
              mt="4"
            />
            <Input
              placeholder="Note"
              width="26em"
              height="4em"
              ml="4"
              mb="4"
              value={Note}
              onChange={(e) => setNote(e.target.value)}
            />
          </InputGroup>

          <Flex ml="4" mb="4">
            <Center>
              <Text>Repeat</Text> <Switch size="sm" ml="8em" />
            </Center>
          </Flex>
          <div className={styles.add_file_inline}>
            <div className={styles.input_inline_style}>
              <label>Attachment</label>
              <input className={styles.input_button} />
            </div>
          </div>

          <Flex
            ml="4"
            mt="4"
            mb="4"
            onClick={() => handleDelete()}
            _hover={{
              cursor: "pointer",
            }}
          >
            <Center color="red">
              <DeleteIcon /> <Text ml="2">DELETE</Text>
            </Center>
          </Flex>
          <Divider mt="8px" />
          <PopoverFooter
            display="flex"
            justifyContent="flex-end"
            align="center"
          >
            <Link mr={3}>Cancel</Link>
            <Button
              bg="black"
              colorScheme="black"
              fontFamily="Segoe UI43"
              fontWeight="bold"
              color="white"
              size="sm"
              p="20px 40px"
              onClick={() => HandleUpdate()}
            >
              SAVE
            </Button>
          </PopoverFooter>
        </Box>
      </PopoverBody>
    </Box>
  );
}
