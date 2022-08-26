import { ADD_OTHERS_TASK_ERROR, ADD_OTHERS_TASK_LOADING, ADD_OTHERS_TASK_SUCCESS, ADD_PERSONAL_TASK_ERROR, ADD_PERSONAL_TASK_LOADING, ADD_PERSONAL_TASK_SUCCESS, ADD_PROFESSIONAL_TASK_ERROR, ADD_PROFESSIONAL_TASK_LOADING, ADD_PROFESSIONAL_TASK_SUCCESS, ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, CHANGE_SECTION, DELETE_OTHERS_TASK_ERROR, DELETE_OTHERS_TASK_LOADING, DELETE_OTHERS_TASK_SUCCESS, DELETE_PERSONAL_TASK_ERROR, DELETE_PERSONAL_TASK_LOADING, DELETE_PERSONAL_TASK_SUCCESS, DELETE_PROFESSIONAL_TASK_ERROR, DELETE_PROFESSIONAL_TASK_LOADING, DELETE_PROFESSIONAL_TASK_SUCCESS, FILTER_ALL_TASK, GET_OTHERS_TASK_ERROR, GET_OTHERS_TASK_LOADING, GET_OTHERS_TASK_SUCCESS, GET_PERSONAL_TASK_ERROR, GET_PERSONAL_TASK_LOADING, GET_PERSONAL_TASK_SUCCESS, GET_PROFESSIONAL_TASK_ERROR, GET_PROFESSIONAL_TASK_LOADING, GET_PROFESSIONAL_TASK_SUCCESS, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS, UPDATE_OTHERS_TASK_ERROR, UPDATE_OTHERS_TASK_LOADING, UPDATE_OTHERS_TASK_SUCCESS, UPDATE_PERSONAL_TASK_ERROR, UPDATE_PERSONAL_TASK_LOADING, UPDATE_PERSONAL_TASK_SUCCESS, UPDATE_PROFESSIONAL_TASK_ERROR, UPDATE_PROFESSIONAL_TASK_LOADING, UPDATE_PROFESSIONAL_TASK_SUCCESS } from "./action.type"
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


export const update_others_task = (data,id) => dispatch=>{
    dispatch({type:UPDATE_OTHERS_TASK_LOADING})
    axios.patch(`http://localhost:6060/Others/${id+1}`,data)
    .then((r)=>(console.log(r),dispatch({type:UPDATE_OTHERS_TASK_SUCCESS,payload:r.data})))
    .catch((err)=>dispatch({type:UPDATE_OTHERS_TASK_ERROR,payload:err.data}))
}


export const update_professional_task = (data,id) => dispatch=>{
    dispatch({type:UPDATE_PROFESSIONAL_TASK_LOADING})
    axios.patch(`http://localhost:6060/Professional/${id+1}`,data)
    .then((r)=>(console.log(r),dispatch({type:UPDATE_PROFESSIONAL_TASK_SUCCESS,payload:r.data})))
    .catch((err)=>dispatch({type:UPDATE_PROFESSIONAL_TASK_ERROR,payload:err.data}))
}

export const update_personal_task = (data,id) => dispatch=>{
    dispatch({type:UPDATE_PERSONAL_TASK_LOADING})
    axios.patch(`http://localhost:6060/Personal/${id+1}`,data)
    .then((r)=>(console.log(r),dispatch({type:UPDATE_PERSONAL_TASK_SUCCESS,payload:r.data})))
    .catch((err)=>dispatch({type:UPDATE_PERSONAL_TASK_ERROR,payload:err.data}))
}

export const delete_Others_task = (id) => dispatch =>{
    dispatch({type:DELETE_OTHERS_TASK_LOADING})
    axios.delete(`http://localhost:6060/Others/${id+1}`)
    .then((r)=>(console.log(r),dispatch({type:DELETE_OTHERS_TASK_SUCCESS,payload:(id+1)})))
    .catch((err)=>dispatch({type:DELETE_OTHERS_TASK_ERROR,payload:err.data}))
}

export const delete_Personal_task = (id) => dispatch =>{
    dispatch({type:DELETE_PERSONAL_TASK_LOADING})
    axios.delete(`http://localhost:6060/Personal/${id+1}`)
    .then((r)=>(console.log(r),dispatch({type:DELETE_PERSONAL_TASK_SUCCESS,payload:(id+1)})))
    .catch((err)=>dispatch({type:DELETE_PERSONAL_TASK_ERROR,payload:err.data}))
}


export const delete_Professional_task = (id) => dispatch =>{
    dispatch({type:DELETE_PROFESSIONAL_TASK_LOADING})
    axios.delete(`http://localhost:6060/Professional/${id+1}`)
    .then((r)=>(console.log(r),dispatch({type:DELETE_PROFESSIONAL_TASK_SUCCESS,payload:(id+1)})))
    .catch((err)=>dispatch({type:DELETE_PROFESSIONAL_TASK_ERROR,payload:err.data}))
}