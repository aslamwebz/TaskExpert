import React from 'react'
import Card from '../Card'
import { Droppable } from 'react-beautiful-dnd'




const CardManager = (props) => {

    // const colorchange = (color, column) => {
    //     console.log(props, column)

    //     // props.colorchange(color, props.item)
    // }

  return (
       <Droppable 
            droppableId={props.item} 
            >
                    {provided => (
                        <div 
                         ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                        {props.tasks.map((task, index) => (
                            <Card key={task.id} listID={task.id} index={index} item={task}
                             taskChange={props.taskChange}
                             taskDelete={props.taskDelete} />
                        ))}
                                

                            {provided.placeholder}
                        </div>

                    )}

        </Droppable>
  )
}

export default CardManager
