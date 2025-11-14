import React, { useState, useEffect } from "react";

import Home from "./Home";

const ToddoList = () => {

    const [imputField, setImputfield] = useState("")
    const [tasks, setNewTask] = useState(["Work at M&TB", "walk by the sea", "I like to play soccer", "Prefere Arsenal team"])

    const imputChange = (event) => {
        setImputfield(event.target.value)
    }

    const handleTouch = (e) => {
        if (e.key === "Enter" && imputField.trim() !== "") {
            setNewTask([...tasks, imputField])
            setImputfield("")
        }
    }

    function addTask() {
        if (imputField.trim() === "") {
            return alert("Write before you add it")
        }
        setNewTask(texte => [...texte, imputField])
        setImputfield("")
    }

    const deletetask = (index) => {
        const upDateTask = tasks.filter((_, ind) => ind !== index);
        setNewTask(upDateTask)

    }

    return (
        <div className="container">
            
            <div className="form">
                <p> todos </p>

            <ol>
                <li className="form-control input-form justify-content-between">
                    <input className=""
                        type="text" placeholder="What needs to be done?"
                        value={imputField}
                        onChange={imputChange}
                        onKeyDown={handleTouch}

                    />
                    <button className="add-button" onClick={addTask}>Add</button>
                </li>
                {
                    tasks.map((task, index) =>
                        <li className="form-control d-flex justify-content-between"
                            key={index}><span> {task} </span>
                            <button className="delete-button" onClick={() => deletetask(index)} >X</button>
                        </li>
                    )
                }
                <li className="form-control length"> {tasks.length} item left</li>
            </ol>
            </div>


        </div>
    )
}

export default ToddoList