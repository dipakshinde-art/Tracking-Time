import { Box, Button, Editable, EditablePreview, EditableTextarea, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { notesCreated } from '../taskreducer/action'

const Notescreate = () => {
    const [note,Setnotes] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = () =>{
        let Note = {
            note
        }
        console.log(Note)
        dispatch(notesCreated(Note))
        Setnotes('')
    }
  return (
    <Box m="4">

    <Input m="4"  placeholder='Create Notes Here...' value={note} onChange={(e)=>Setnotes(e.target.value)}>
  </Input>

  <Button colorScheme={'teal'} onClick={handleSubmit} >Submit</Button>
    </Box>
  )
}

export default Notescreate