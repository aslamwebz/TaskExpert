import React, {useState, useEffect} from 'react'
import CardManager from '../CardManager/CardManager'
import Rodal from 'rodal'
import  {TwitterPicker} from 'react-color'
import { connect } from 'react-redux'
import { DragDropContext } from "react-beautiful-dnd";
import Swal from 'sweetalert2'

import { fetchData, addArea, addTask, dragEnd,colorChange,taskChange,columnChange, deleteColumn, deleteTask} from '../../actions/taskActions'


const Home = props => {

    const [data, setData] = useState([])
    const [visible, setVisible] = useState(false)
    const [columnChange, setColumnChange] = useState(false)
    
    useEffect(() => {
        props.fetchData()
    },[])

    useEffect(() => {
        setData(props.data)
        // console.log(props.data)
    }, [props.data])


    const addArea = () => {
       props.addArea(props.data)
    }

    const style={
        'container':{
            fontSize:'12px',
            padding:0,
            // background:'rgba(50,60,80,.75)',
            margin:'5px',
            
    
        },
        'btn':{
            textAlign:'center',
            border:'none',
            background:'none',
            fonSize:'16px',
        }, 
    }

    const dragEnd = result => {
     props.dragEnd(result, props.data)
    }

    const addTask = (column) => {
        props.addTask(column, data)
    }

    const showhide = () =>{
        setVisible(!visible)
    }

    const colorchange = (color, column) => {
        props.colorChange(color, column , props.data)
    }

    const taskChange = (task, id) => {
        props.taskChange(task, id, props.data)
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const columnShow = (column) => {
        setColumnChange(true)
        // return(
        //     <Rodal visible={true} onClose={() => setColumnChange()}>
        //         {console.log(column)}
        //       <Column columnChange={columnChangeManager} column={column} data={props.data}/>
        //    </Rodal>
        // )
        Swal.fire({
            title: 'Please Enter a Column Name',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'on'
            },
            showCancelButton: true,
            confirmButtonText: 'Save',
            showLoaderOnConfirm: true,
            preConfirm: (colValue) => {
                console.log(colValue)
                props.columnChange(column, colValue, props.data)
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
          })
    }


    const content =  props.data.columnData.map(item => {
                    const column = props.data.columns[item]
                    let tasks = ''
                    if(column.taskIds !== ''){
                        tasks = column.taskIds.map(id =>props. data.tasks[id])
                    }
                   return(
                    <div className="" key={item} style={style.container}>
                        <div className="card">
                            <div className="card-header" style={{background:props.data.columns[item].background}} 
                            
                          >
                                <h4 className="m-4"  >{props.data.columns[item].title}
                                <button className="float-right btn btn-outline" onClick={() => props.deleteColumn(item, props.data)}><span ><i className="far fa-trash-alt"></i></span></button>
                                <button className="float-right btn btn-outline" onClick={() => columnShow(column)}><span><i className="far fa-edit"></i></span></button>
                                </h4>
                                {/* <button onClick={() => showhide()}>ChangeColor</button> */}
                                {/* <Rodal visible={visible} onClose={() => showhide()}>
                                    <div className="d-flex justify-content-center">
                                        <TwitterPicker onChangeComplete={(color) => colorchange(color, item) }/>
                                    </div>
                                </Rodal> */}
                            </div>
                            <div className="card-body">
                                <CardManager item={item} 
                                 tasks={tasks} 
                                colorchange={colorchange}
                                taskChange={taskChange}
                                taskDelete={(id) => props.deleteTask(id, item, props.data)}
                                // showhide={showhide}
                                // visible={visible}
                                />
                            </div>
                            <div className="card-footer">
                                <button onClick={() => addTask(item)} style={style.btn}> <i className="fas fa-plus"></i> &nbsp;  Add a task</button>    
                            </div>
                        </div>
                    </div>
                   )
                } 
                )
                
                

  return (
    <DragDropContext onDragEnd={dragEnd}>
        <div className="row m-2 flex-row flex-sm-nowrap pt-2" id="content">
        {content}
            <div className="col-sm-4 col-md-3 d-flex justify-content-center" >
            <div className="card">
                <div className="card-body">
                    <button className="btn btn-info" onClick={() => addArea()} ><i className="fas fa-plus"></i> &nbsp;  Add another List</button>
                </div>
            </div>
        </div>
        </div> 
       
    </DragDropContext> 
  )
}

const mapStateToProps = state => ({
    data:state.datas.data
})

export default connect(mapStateToProps, {columnChange, fetchData, addArea, addTask, dragEnd, colorChange, taskChange, deleteColumn, deleteTask})(Home)
