import {FETCH_DATA, NEW_TASK,COLUMN_CHANGE, TASK_CHANGE, NEW_COLUMN, DRAG_END, COLOR_CHANGE} from './types'
import { Data } from '../components/Data/Data'

export const fetchData = () => dispatch => {
    // console.log('fetch',Data)
    const D = Data
    dispatch({
        type:FETCH_DATA,
        payload:D
    })
}

export const addArea = (data) => dispatch => {
    let columnum = data.columnData.length + 1
    columnum = 'column-' + columnum
    let columns = [...data.columnData, columnum]
    let emptyColumn = {
        ...data.columns, 
        [columnum]:{
            id:columnum,
            title:'Add a title',
            taskIds:[],
            background:'rgb(48, 191, 191)',
        }
    }
    let d = {
            ...data,
            columns:emptyColumn,
            columnData:columns
    }

    dispatch({
        type:NEW_COLUMN,
        payload:d
    })
}

export const addTask = (column, data) => dispatch => {
    const tasknum = data.taskCount + 1
        const taskName = 'task-' + tasknum
        const tasks = {
            ...data.tasks, 
            [taskName]:{
                id: taskName,
                text: 'Please Enter A Topic', 
                column:column}
        }

        const taskIds = [...data.columns[column].taskIds, taskName]

        const columns = {
            ...data.columns, 
            [column]:{
                ...data.columns[column],
                taskIds
            }
        }

        const d = {
                ...data,
                columns:columns,
                taskCount:tasknum,
                tasks:tasks,
        }

        dispatch({
            type:NEW_TASK,
            payload:d
        })
}

export const dragEnd = (result, data) => dispatch => {

    let returnData = ''

    const {destination, source, draggableId} = result
    if(!destination){
        return;
    }
    
  if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const begin = data.columns[source.droppableId];
    const end = data.columns[destination.droppableId];

    if (begin === end) {
       
      const taskIDs = Array.from(begin.taskIds);
      taskIDs.splice(source.index, 1);
      taskIDs.splice(destination.index, 0, draggableId);

      const newColumn = {
          ...begin, 
          taskIds:taskIDs
      }

      const newData = {
          ...data,
          columns:{
              ...data.columns,
              [newColumn.id]:newColumn
          }
      }

      returnData = newData

      return;
    } else {
      const startTasksIds = Array.from(begin.taskIds)
      startTasksIds.splice(source.index, 1)
      const newStart = {
          ...begin,
          taskIds:startTasksIds
      }

      const endTaskIds = Array.from(end.taskIds)
      endTaskIds.splice(destination.index, 0, draggableId)
      const newEnd = {
          ...end,
          taskIds:endTaskIds
      }

      const newData = {
          ...data,
          columns:{
              ...data.columns,
              [newStart.id]:newStart,
              [newEnd.id]:newEnd
          }
      }
      returnData = newData
    }


    dispatch({
        type:DRAG_END,
        payload:returnData
    })

}

export const colorChange = (color, column, data) => dispatch => {
    
    const columns = {
        ...data.columns, 
        [column]:{
            ...data.columns[column],
            background:color.hex
        }
    }
    const d = {
        ...data,
        columns:columns,
    }

    dispatch({
        type:COLOR_CHANGE,
        payload:d
    })
}

export const taskChange = (task, id, data) => dispatch => {

    let tasks = {
        ...data.tasks,
       [id]:task
    }

    let d = {
        ...data,
        tasks:tasks
    }

    dispatch({
        type:TASK_CHANGE,
        payload:d
    })
}

export const columnChange = (column, val, data) => dispatch => {


    let d = {
        ...data,
        columns:{
            ...data.columns,
            [column.id]:{
                id:column.id,
                title:val,
                taskIds:column.taskIds,
                background:column.background
            }
        }
    }

    console.log(d)

    dispatch({
        type:COLUMN_CHANGE,
        payload:d
    })
}