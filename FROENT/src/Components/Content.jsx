import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Content = () => {

    const { change } = useSelector(state => state.task);
    useEffect(() => {
      
    
      console.log(change)
     
    }, [change])
    
    if(change === "List"){
        return <Box>
            List
        </Box>
    }
    else if(change === "Board"){
        return <Box>
            Board
        </Box>
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