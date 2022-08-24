import { CHANGE_SECTION } from "./action.type"


export const changeSection = (data) => (dispatch)=>{
dispatch({type:CHANGE_SECTION,payload:data});
}