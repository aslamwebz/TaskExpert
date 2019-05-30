import React, {useState} from 'react'
import {Draggable} from 'react-beautiful-dnd'
import Textarea  from 'react-textarea-autosize'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Home = props => {

    const [textValue, setTextValue] = useState(props.item.text)
    const [descValue, setDescValue] = useState(props.item.description)
    const [readOnly, setreadOnly] = useState(true)
    const [visible, setVisible] = useState(false)

    const style={
        height:'40px',
        width:'100%',
        fontSize:'18px',
        padding:'13px 15px',
        height:'50px',
        fontWeight:'500',
        background:'white',
        margin:'3px 0',
        border:'1px solid #dfe1e6',
        borderRadius:' 5px',
        boxShadow: '0 1px 0 rgba(9,30,66,.25)',
        overflow:'hidden',
    }

    const openWindow = (val) => {
        setreadOnly(val)
        setVisible(true)
    }

    const submitHandle = (e) => {
        e.preventDefault()
        const task = {
                id: props.item.id,
                text: textValue, 
                description:descValue
        }

        setVisible(false)
        props.taskChange(task,props.item.id)
    }

  return (
        <Draggable draggableId={props.listID} index={props.index}>
            {provided => (
                <div  className="input-group " ref={provided.innerRef}{...provided.draggableProps} {...provided.dragHandleProps}  >
                    {/* <h4 onMouseEnter={() => console.log('only touch')} onClick={() => console.log('click')}>{value}</h4> */}
                    
                    <div onClick={() => openWindow(true)} style={style}>
                        {textValue}
                    </div>

                    <Rodal visible={visible} onClose={() => setVisible(false)}
                    height={500}
                    width={700}>
                        <form onSubmit={submitHandle} id="taskform">
                            <div className="form-group">
                                <label >Title</label>
                                <input type="text" className="form-control"  onChange={(e) => setTextValue(e.target.value)}
                                value={textValue}
                                />
                            </div>
                            <div className="form-group">
                                <label >Description</label>
                                <Textarea className="form-control"  
                                onChange={(e) => setDescValue(e.target.value)}
                                defaultValue={descValue}
                                minRows={8}
                                cols={0}
                                ></Textarea>
                            </div>
                            <button className="btn btn-info" type="submit">Save</button>
                        </form>
                     </Rodal>
                    
                 {provided.placeholder}

                </div>
            )}
        </Draggable>

  )
}


export default Home


