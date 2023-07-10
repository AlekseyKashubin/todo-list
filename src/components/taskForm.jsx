import React, { useState } from "react";

const TaskForm = props => {
    const { addFunction } = props

    const [taskData, setTaskData] = useState({
        kTask: ""
    })


    const formSubmit = (e) => {
        e.preventDefault()

        addFunction(taskData)

        setTaskData({
            kTask: ""
        })
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setTaskData(currentData=>( {...currentData, [name]:value}))

    }

    return(
        <form onSubmit={formSubmit}>
            <label>New Task :</label>
            <input name="kTask" onChange={handleChange} value={taskData.kTask} type="text"></input>
            <button>Add</button>
        </form>
    )
}
export default TaskForm;