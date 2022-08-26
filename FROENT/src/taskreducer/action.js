import { ADD_OTHERS_TASK_ERROR, ADD_OTHERS_TASK_LOADING, ADD_OTHERS_TASK_SUCCESS, ADD_PERSONAL_TASK_ERROR, ADD_PERSONAL_TASK_LOADING, ADD_PERSONAL_TASK_SUCCESS, ADD_PROFESSIONAL_TASK_ERROR, ADD_PROFESSIONAL_TASK_LOADING, ADD_PROFESSIONAL_TASK_SUCCESS, ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, CHANGE_SECTION, FILTER_ALL_TASK, GET_OTHERS_TASK_ERROR, GET_OTHERS_TASK_LOADING, GET_OTHERS_TASK_SUCCESS, GET_PERSONAL_TASK_ERROR, GET_PERSONAL_TASK_LOADING, GET_PERSONAL_TASK_SUCCESS, GET_PROFESSIONAL_TASK_ERROR, GET_PROFESSIONAL_TASK_LOADING, GET_PROFESSIONAL_TASK_SUCCESS, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS } from "./action.type"
import axios from "axios"

export const changeSection = (data) => (dispatch)=>{
dispatch({type:CHANGE_SECTION,payload:data});
}

export const getTaskApi = () => (dispatch) =>{
    dispatch({type:GET_TASK_LOADING})
    axios.get('http://localhost:6060/tasks')
    .then((r)=>dispatch({type:GET_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_TASK_ERROR}))
}


export const addTaskApi  = (data) => dispatch =>{
    dispatch({type:ADD_TASK_LOADING})
    axios.post('http://localhost:6060/tasks',data)
    .then((r)=>dispatch({type:ADD_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:ADD_TASK_ERROR,payload:err.data}))
}

export const filterTask = (data) => dispatch =>{
    dispatch({type:FILTER_ALL_TASK,payload:data})
}

export const personalTaskApi = () => dispatch =>{
    dispatch({type:GET_PERSONAL_TASK_LOADING})
    axios.get('http://localhost:6060/Personal')
    .then((r)=>(dispatch({type:GET_PERSONAL_TASK_SUCCESS,payload:r.data})))
    .catch((err)=>dispatch({type:GET_PERSONAL_TASK_ERROR,payload:err}))
}

export const professionalTaskApi = () => dispatch =>{
    dispatch({type:GET_PROFESSIONAL_TASK_LOADING})
    axios.get('http://localhost:6060/Professional')
    .then((r)=>dispatch({type:GET_PROFESSIONAL_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_PROFESSIONAL_TASK_ERROR,payload:err}))
}

export const othersTaskApi = () => dispatch =>{
    dispatch({type:GET_OTHERS_TASK_LOADING})
    axios.get('http://localhost:6060/Others')
    .then((r)=>dispatch({type:GET_OTHERS_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_OTHERS_TASK_ERROR,payload:err}))
}



export const professionalAddTaskApi  = (data) => dispatch =>{
    dispatch({type:ADD_PROFESSIONAL_TASK_LOADING})
    axios.post('http://localhost:6060/Professional',data)
    .then((r)=>dispatch({type:ADD_PROFESSIONAL_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:ADD_PROFESSIONAL_TASK_ERROR,payload:err.data}))
}




export const personalAddTaskApi  = (data) => dispatch =>{
    dispatch({type:ADD_PERSONAL_TASK_LOADING})
    axios.post('http://localhost:6060/Personal',data)
    .then((r)=>dispatch({type:ADD_PERSONAL_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:ADD_PERSONAL_TASK_ERROR,payload:err.data}))
}



export const othersAddTaskApi  = (data) => dispatch =>{
    dispatch({type:ADD_OTHERS_TASK_LOADING})
    axios.post('http://localhost:6060/Others',data)
    .then((r)=>dispatch({type:ADD_OTHERS_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:ADD_OTHERS_TASK_ERROR,payload:err.data}))
}
