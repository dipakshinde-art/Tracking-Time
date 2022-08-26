import {
    ADD_OTHERS_TASK_ERROR,
    ADD_OTHERS_TASK_LOADING,
    ADD_OTHERS_TASK_SUCCESS,
    ADD_PERSONAL_TASK_ERROR,
    ADD_PERSONAL_TASK_LOADING,
    ADD_PERSONAL_TASK_SUCCESS,
    ADD_PROFESSIONAL_TASK_ERROR,
    ADD_PROFESSIONAL_TASK_LOADING,
  ADD_PROFESSIONAL_TASK_SUCCESS,
  ADD_TASK_ERROR,
  ADD_TASK_LOADING,
  ADD_TASK_SUCCESS,
  CHANGE_SECTION,
  FILTER_ALL_TASK,
  GET_OTHERS_TASK_ERROR,
  GET_OTHERS_TASK_LOADING,
  GET_OTHERS_TASK_SUCCESS,
  GET_PERSONAL_TASK_ERROR,
  GET_PERSONAL_TASK_LOADING,
  GET_PERSONAL_TASK_SUCCESS,
  GET_PROFESSIONAL_TASK_ERROR,
  GET_PROFESSIONAL_TASK_LOADING,
  GET_PROFESSIONAL_TASK_SUCCESS,
  GET_TASK_ERROR,
  GET_TASK_LOADING,
  GET_TASK_SUCCESS,
  UPDATE_OTHERS_TASK_ERROR,
  UPDATE_OTHERS_TASK_LOADING,
  UPDATE_OTHERS_TASK_SUCCESS,
} from "./action.type";

const initialState = {
  tasks: [],
  Personal_task: [],
  Professional_task: [],
  Others_task: [],
  change: "List",
  loading: false,
  error: false,
  filter: false,
};

export const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_SECTION: {
      return {
        ...state,
        change: payload,
      };
    }

    case GET_TASK_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        tasks: payload,
        error: false,
      };
    }
    case GET_TASK_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case ADD_TASK_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ADD_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, payload],
        error: false,
      };
    }
    case ADD_TASK_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case FILTER_ALL_TASK: {
      return {
        ...state,
        filter: payload,
      };
    }
    case GET_PERSONAL_TASK_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PERSONAL_TASK_SUCCESS: {
 
      return {
        ...state,
        loading: false,
        Personal_task: payload,
        error: false,
      };
    }
    case GET_PERSONAL_TASK_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_PROFESSIONAL_TASK_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PROFESSIONAL_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        Professional_task: payload,
        error: false,
      };
    }
    case GET_PROFESSIONAL_TASK_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_OTHERS_TASK_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_OTHERS_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        Others_task: payload,
        error: false,
      };
    }
    case GET_OTHERS_TASK_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case ADD_PROFESSIONAL_TASK_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case ADD_PROFESSIONAL_TASK_SUCCESS: {
        return {
          ...state,
          loading: false,
          Professional_task: [...state.Professional_task, payload],
          error: false,
        };
      }
      case ADD_PROFESSIONAL_TASK_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }

      case ADD_PERSONAL_TASK_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case ADD_PERSONAL_TASK_SUCCESS: {
        return {
          ...state,
          loading: false,
          Personal_task: [...state.Personal_task, payload],
          error: false,
        };
      }
      case ADD_PERSONAL_TASK_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }

      case ADD_OTHERS_TASK_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case ADD_OTHERS_TASK_SUCCESS: {
        return {
          ...state,
          loading: false,
          Others_task: [...state.Others_task, payload],
          error: false,
        };
      }
      case ADD_OTHERS_TASK_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
  
      case UPDATE_OTHERS_TASK_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case UPDATE_OTHERS_TASK_SUCCESS: {
          let updated = state.Others_task.map((el)=>{
              if(el.id==payload.id) {
                  console.log(el)
                  return payload
                }
                else{
                    return el
                }
            })
            // console.log(updated)
            // if(payload.id==oth)
        return {
          ...state,
          loading: false,
          Others_task:updated,
          error: false,
        };
      }
      case UPDATE_OTHERS_TASK_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }

      
    default: {
      return state;
    }
  }
};
