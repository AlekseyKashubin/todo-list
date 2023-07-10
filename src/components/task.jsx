import React, { useState } from 'react'

const Task = (props) => {
    const { task, id, removeFunction } = props
    const [checked, setChecked] = React.useState([])

    const handleChange = () => {
        setChecked(!checked);
    };


    return (
        <div className='task-line'>
            <input type='checkbox' id='line-through' checked={!checked} onChange={handleChange} />
            <label for='line-through'>{task} :</label>
            <button onClick={() => removeFunction(id)}>Delete</button>
        </div>
    )
}

export default Task
