import { DeleteIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
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
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import { MdOutlineNotes } from "react-icons/md";
import styles from "./dash.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function ManualClose({ today ,getNotes }) {
  const current = new Date();
  const CDate = today / `${current.getMonth() + 1}/${current.getFullYear()}`;
  const navigate = useNavigate();

  const [startTime, setStartTime] = useState("");
  const [endTime, setendTime] = useState("");
  const [date, setCreateDate] = useState("");
  const [img, setFile] = useState("");
  const [Title, setTitle] = useState("");
  const [Note, setNote] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const Addvalue = (e) => {
    e.preventDefault();
    let payload = {
      Title,
      Note,
      img,
      startTime,
      endTime,
      DATE: startTime,
    };
  
    axios
      .post(`https://trackime.herokuapp.com/note/create`, payload)
      .then((response) => {
        console.log(response.data);
        // window.location.reload(false);
        if(response){
          onClose()
          getNotes();
        }
        
        alert("NOTE created");
      })
      .catch((err) => alert("Some Filed is mIssing "));
  };

  return (
    <Box mt="10px">
      <Text onClick={onOpen} fontSize="16px" pb="7px">
        +
      </Text>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        p="4"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Avatar src="https://bit.ly/broken-link" size="sm" mr="3" />
            username
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>

          <Input
            placeholder="Project/Task"
            width="26em"
            height="4em"
            ml="4"
            mb="4"
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
              onChange={(e) => setNote(e.target.value)}
            />
          </InputGroup>

          <Flex ml="6" mb="4">
            <Center>
              <Text>Repeat</Text> <Switch size="sm" ml="8em" />
            </Center>
          </Flex>
          <div className={styles.add_file_inline}>
            <div className={styles.input_inline_style}>
              <label>Attachment</label>
              <input
                type="file"
                className={styles.input_button}
                onChange={(e) => setFile(e.target.value)}
              />
            </div>
          </div>

          <Flex ml="6" mt="4" mb="4">
            <Center color="red">
              <DeleteIcon /> <Text ml="2">DELETE</Text>
            </Center>
          </Flex>
          <Divider mt="8px" />
          <ModalFooter>
            <Link onClick={onClose} mr={3}>
              Cancel
            </Link>
            <Button
              bg="black"
              colorScheme="black"
              fontFamily="Segoe UI43"
              fontWeight="bold"
              color="white"
              size="sm"
              p="20px 40px"
              onClick={Addvalue}
            >
              SAVE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
