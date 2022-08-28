import { ADD_OTHERS_TASK_ERROR, ADD_OTHERS_TASK_LOADING, ADD_OTHERS_TASK_SUCCESS, ADD_PERSONAL_TASK_ERROR, ADD_PERSONAL_TASK_LOADING, ADD_PERSONAL_TASK_SUCCESS, ADD_PROFESSIONAL_TASK_ERROR, ADD_PROFESSIONAL_TASK_LOADING, ADD_PROFESSIONAL_TASK_SUCCESS, ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, CHANGE_SECTION, DELETE_OTHERS_TASK_ERROR, DELETE_OTHERS_TASK_LOADING, DELETE_OTHERS_TASK_SUCCESS, DELETE_PERSONAL_TASK_ERROR, DELETE_PERSONAL_TASK_LOADING, DELETE_PERSONAL_TASK_SUCCESS, DELETE_PROFESSIONAL_TASK_ERROR, DELETE_PROFESSIONAL_TASK_LOADING, DELETE_PROFESSIONAL_TASK_SUCCESS, FILTER_ALL_TASK, GET_OTHERS_TASK_ERROR, GET_OTHERS_TASK_LOADING, GET_OTHERS_TASK_SUCCESS, GET_PERSONAL_TASK_ERROR, GET_PERSONAL_TASK_LOADING, GET_PERSONAL_TASK_SUCCESS, GET_PROFESSIONAL_TASK_ERROR, GET_PROFESSIONAL_TASK_LOADING, GET_PROFESSIONAL_TASK_SUCCESS, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS, NOTES_CREATED, NOTES_DELETED, NOTES_READ, NOTES_UPDATED, UPDATE_OTHERS_TASK_ERROR, UPDATE_OTHERS_TASK_LOADING, UPDATE_OTHERS_TASK_SUCCESS, UPDATE_PERSONAL_TASK_ERROR, UPDATE_PERSONAL_TASK_LOADING, UPDATE_PERSONAL_TASK_SUCCESS, UPDATE_PROFESSIONAL_TASK_ERROR, UPDATE_PROFESSIONAL_TASK_LOADING, UPDATE_PROFESSIONAL_TASK_SUCCESS } from "./action.type"
import axios from "axios"
import { loadData } from "../Components/hoc/LocalStorage";

export const changeSection = (data) => (dispatch)=>{
dispatch({type:CHANGE_SECTION,payload:data});
}

// Task part

export const getTaskApi = () => (dispatch) =>{
    const Taskaxios = axios.create({
        baseURL: "http://localhost:5000/task",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });

    dispatch({type:GET_TASK_LOADING})
    Taskaxios.get('/')
    .then((r)=>(console.log(r),dispatch({type:GET_TASK_SUCCESS,payload:r.data})))
    .catch((err)=>dispatch({type:GET_TASK_ERROR}))
}


export const addTaskApi  = (data) => dispatch =>{
    const Taskaxios = axios.create({
        baseURL: "http://localhost:5000/task",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:ADD_TASK_LOADING})
    Taskaxios.post('/create',data)
    .then((r)=>dispatch({type:ADD_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:ADD_TASK_ERROR,payload:err.data}))
}


// Personal part


export const personalTaskApi = () => dispatch =>{
    const Personalaxios = axios.create({
        baseURL: "http://localhost:5000/personal",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:GET_PERSONAL_TASK_LOADING})
    Personalaxios.get('/')
    .then((r)=>(dispatch({type:GET_PERSONAL_TASK_SUCCESS,payload:r.data})))
    .catch((err)=>dispatch({type:GET_PERSONAL_TASK_ERROR,payload:err}))
}



export const personalAddTaskApi  = (data) => dispatch =>{
    const Personalaxios = axios.create({
        baseURL: "http://localhost:5000/personal",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:ADD_PERSONAL_TASK_LOADING})
    Personalaxios.post('/create',data)
    .then((r)=>dispatch({type:ADD_PERSONAL_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:ADD_PERSONAL_TASK_ERROR,payload:err.data}))
}


export const update_personal_task = (data,id) => dispatch=>{
    const Personalaxios = axios.create({
        baseURL: "http://localhost:5000/personal",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:UPDATE_PERSONAL_TASK_LOADING})
    Personalaxios.patch(`/${id}/update`,data)
    .then((r)=>(console.log(r.data),dispatch({type:UPDATE_PERSONAL_TASK_SUCCESS,payload:r.data.task})))
    .catch((err)=>dispatch({type:UPDATE_PERSONAL_TASK_ERROR,payload:err.data}))
}


export const delete_Personal_task = (id) => dispatch =>{
    const Personalaxios = axios.create({
        baseURL: "http://localhost:5000/personal",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:DELETE_PERSONAL_TASK_LOADING})
    Personalaxios.delete(`/${id}/delete`)
    .then((r)=>(console.log(r),dispatch({type:DELETE_PERSONAL_TASK_SUCCESS,payload:r.data.taskId})))
    .catch((err)=>dispatch({type:DELETE_PERSONAL_TASK_ERROR,payload:err.data}))
}


//  Professional part


export const professionalTaskApi = () => dispatch =>{
    const Professionalaxios = axios.create({
        baseURL: "http://localhost:5000/professional",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:GET_PROFESSIONAL_TASK_LOADING})
    Professionalaxios.get('/')
    .then((r)=>dispatch({type:GET_PROFESSIONAL_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_PROFESSIONAL_TASK_ERROR,payload:err}))
}


export const professionalAddTaskApi  = (data) => dispatch =>{
    const Professionalaxios = axios.create({
        baseURL: "http://localhost:5000/professional",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:ADD_PROFESSIONAL_TASK_LOADING})
    Professionalaxios.post('/create',data)
    .then((r)=>dispatch({type:ADD_PROFESSIONAL_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:ADD_PROFESSIONAL_TASK_ERROR,payload:err.data}))
}


export const update_professional_task = (data,id) => dispatch=>{
    const Professionalaxios = axios.create({
        baseURL: "http://localhost:5000/professional",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:UPDATE_PROFESSIONAL_TASK_LOADING})
    Professionalaxios.patch(`/${id}/update`,data)
    .then((r)=>(console.log(r),dispatch({type:UPDATE_PROFESSIONAL_TASK_SUCCESS,payload:r.data.task})))
    .catch((err)=>dispatch({type:UPDATE_PROFESSIONAL_TASK_ERROR,payload:err.data}))
}


export const delete_Professional_task = (id) => dispatch =>{
    const Professionalaxios = axios.create({
        baseURL: "http://localhost:5000/professional",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:DELETE_PROFESSIONAL_TASK_LOADING})
    Professionalaxios.delete(`/${id}/delete`)
    .then((r)=>(console.log(r),dispatch({type:DELETE_PROFESSIONAL_TASK_SUCCESS,payload:r.data.taskId})))
    .catch((err)=>dispatch({type:DELETE_PROFESSIONAL_TASK_ERROR,payload:err.data}))
}


// Others part




export const othersTaskApi = () => dispatch =>{
    const Othersaxios = axios.create({
        baseURL: "http://localhost:5000/others",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:GET_OTHERS_TASK_LOADING})
    Othersaxios.get('/')
    .then((r)=>dispatch({type:GET_OTHERS_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:GET_OTHERS_TASK_ERROR,payload:err}))
}



export const othersAddTaskApi  = (data) => dispatch =>{
    const Othersaxios = axios.create({
        baseURL: "http://localhost:5000/others",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:ADD_OTHERS_TASK_LOADING})
    Othersaxios.post('/create',data)
    .then((r)=>dispatch({type:ADD_OTHERS_TASK_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:ADD_OTHERS_TASK_ERROR,payload:err.data}))
}


export const update_others_task = (data,id) => dispatch=>{
    const Othersaxios = axios.create({
        baseURL: "http://localhost:5000/others",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:UPDATE_OTHERS_TASK_LOADING})
    Othersaxios.patch(`/${id}/update`,data)
    .then((r)=>(console.log(r),dispatch({type:UPDATE_OTHERS_TASK_SUCCESS,payload:r.data.task})))
    .catch((err)=>dispatch({type:UPDATE_OTHERS_TASK_ERROR,payload:err.data}))
}



export const delete_Others_task = (id) => dispatch =>{
    const Othersaxios = axios.create({
        baseURL: "http://localhost:5000/others",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    dispatch({type:DELETE_OTHERS_TASK_LOADING})
    Othersaxios.delete(`/${id}/delete`)
    .then((r)=>(console.log(r),dispatch({type:DELETE_OTHERS_TASK_SUCCESS,payload:r.data.taskId})))
    .catch((err)=>dispatch({type:DELETE_OTHERS_TASK_ERROR,payload:err.data}))
}


// filter task part

export const filterTask = (data) => dispatch =>{
    dispatch({type:FILTER_ALL_TASK,payload:data})
}




//  Notes part

export const notesCreated = (data) => dispatch =>{
    const Notesaxios = axios.create({
        baseURL: "http://localhost:5000/notes",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    Notesaxios.post('/create',data)
    .then((r)=>(console.log(r),dispatch({type:NOTES_CREATED,payload:r.data})))
}

export const notesRead = () => dispatch =>{
    const Notesaxios = axios.create({
        baseURL: "http://localhost:5000/notes",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    Notesaxios.get('/')
    .then((r)=>(console.log(r),dispatch({type:NOTES_READ,payload:r.data})))
}

export const notesUpdated = (id,data) => dispatch =>{
    const Notesaxios = axios.create({
        baseURL: "http://localhost:5000/notes",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    console.log(id,data)
    Notesaxios.patch(`/${id}/update`,data)
    .then((r)=>(console.log(r),dispatch({type:NOTES_UPDATED,payload:r.data.task})))
}

export const notesDeleted = (id) => dispatch =>{
    const Notesaxios = axios.create({
        baseURL: "http://localhost:5000/notes",
        headers: {
          Authorization: `Bearer ${loadData("userid")}`,
        },
      });
    Notesaxios.delete(`/${id}/delete`)
    .then((r)=>(console.log(r),dispatch({type:NOTES_DELETED,payload:id})))
}