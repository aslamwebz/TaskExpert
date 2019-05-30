import React, {useState } from 'react'

const Column = (props) => {

    const [colValue, setColValue] = useState('')
    const [columnChange, setColumnChange] = useState(false)

    const colChange = () => {
        setColumnChange(!columnChange)
    }

    const colChangeHandle = (e) => {
        e.preventDefault() 
        props.columnChange(props.column, colValue, props.data)
        setColumnChange(false)
            
    }


  return (
    <div className="d-flex justify-content-center">
        <form onSubmit={colChangeHandle}>
            <div className="form-group">
                <label >Title</label>
                <input type="text" className="form-control" onChange={(e) => setColValue(e.target.value)}
                value={colValue}
                />
            </div>
            <button className="btn btn-submit" type="submit">Save</button>
        </form>
    </div>
  )
}

export default Column
