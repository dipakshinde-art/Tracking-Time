import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Broad from './Broad';
import List from './List'

const Content = () => {

    const { change } = useSelector(state => state.task);
    useEffect(() => {
      
    
      console.log(change)
     
    }, [change])
    
    if(change === "List"){
        return <List />
    }
    else if(change === "Board"){
        return <Broad />
    }
    else if(change === "Timeline"){
        return <Box>
            Timeline
        </Box>
    }
    else if(change === "Report"){
        return <Box>
            Report
        </Box>
    }
    else if(change === "Notes"){
        return <Box>
            Notes
        </Box>
    }
 
}

export default Content