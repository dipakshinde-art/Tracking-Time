import { CHANGE_SECTION } from "./action.type"

const initialState = {
    tasks: [],
    change:"List",
    loading: false,
    error: false,
  };

export const taskReducer = (state = initialState , {type,payload}) =>{
    switch (type) {
        case CHANGE_SECTION:{
           
            return {
                ...state,
                change:payload
            }

        }
            
          
    
        default:{
            return state
        }
          
    }
}