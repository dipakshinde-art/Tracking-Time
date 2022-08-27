import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Broad from './Broad';
import List from './List'
import Notescreate from './Notescreate';
import Shownotes from './Shownotes';

const Content = () => {

    const { change } = useSelector(state => state.task);
    useEffect(() => {
      
    
    //   console.log(change)
     
    }, [change])
    
    if(change === "List"){
        return <List />
    }
    else if(change === "Board"){
        return <Broad />
    }
   
    else if(change === "Note"){
        return <Notescreate />
    }
    else if(change === "Notes"){
        return <Shownotes />
    }
 
}

export default Content