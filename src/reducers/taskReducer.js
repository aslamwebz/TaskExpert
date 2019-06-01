import {FETCH_DATA,NEW_COLUMN,COLUMN_CHANGE, NEW_TASK,TASK_CHANGE, DRAG_END,COLOR_CHANGE, DELETE_COLUMN, DELETE_TASK} from '../actions/types'

const initialState = {
    data:{tasks :{
   },
   columnData:[],
   columns:{
       
   },
   taskCount:8},
    task:{}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_DATA:
        // console.log('Fetch Data Reducer', action.payload)
            return{
                ...state,
                data:action.payload
            }
        case NEW_COLUMN:
            return{
                ...state,
                data:action.payload
            }
        case NEW_TASK:
            return{
                ...state,
                data:action.payload
            }
        case DRAG_END:
            return{
                ...state,
                data:action.payload
            }
        case COLOR_CHANGE:
            return{
                ...state,
                data:action.payload
            }
        case TASK_CHANGE:
            return{
                ...state,
                data:action.payload
            }
        case COLUMN_CHANGE:
            return{
                ...state,
                data:action.payload
            }
        case DELETE_COLUMN:
            return{
                ...state,
                data:action.payload
            }
        case DELETE_TASK:
            return{
                ...state,
                data:action.payload
            }
        default:
            return state
    }
}