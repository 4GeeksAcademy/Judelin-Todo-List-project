import React, { useState, useEffect } from "react";

import Home from "./Home";

const ToddoList = () => {

    const [imputField, setImputfield] = useState("")
    const [tasks, setNewTask] = useState(["Work at M&TB", "walk by the sea", "I like to play soccer", "Prefere Arsenal team"])

    const imputChange = (event) => {
        setImputfield(event.target.value)
    }

    function addTask(){
        if(imputField.trim() === ""){
            return alert("Write before you add it")
        }
        setNewTask(texte => [...texte, imputField])
        setImputfield("")
    }

    const deletetask = (index)=>{
        const upDateTask = tasks.filter((_, ind) => ind !== index);
        setNewTask(upDateTask)

    }

    return (
        <div className="container">
            <h1> Todos</h1>

            <ol>
                <li>
                    <input
                        type="text" placeholder="What needs to be done?"
                        value={imputField}
                        onChange={imputChange}    
                    />
                    <button onClick={addTask}>Add</button>
                </li>
            {
                tasks.map((task, index)=> 
                    <li key={index}><span> {task} </span>
                     <button className="delete-button" onClick={()=>deletetask(index)} >X</button>
                     </li>
                )
            }
                
            </ol>
            <span> {tasks.length} item left</span>

        </div>
    )
}

export default ToddoList