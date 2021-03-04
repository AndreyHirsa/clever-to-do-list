import React from "react"
import { Task } from "../Task"
import { TaskForm } from "../TaskForm"
import styles from "./style.module.css";

export const TasksContainer=()=>{
    return(
        <div className={styles.taskContainer}>
        <TaskForm/>   
        <Task/>
        </div>
    )
}