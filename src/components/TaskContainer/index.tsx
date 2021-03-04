import React, {useContext, useEffect} from "react"
import { Task } from "../Task"
import { TaskForm } from "../TaskForm"
import styles from "./style.module.css";
import {useUserData} from "../../selectors/stateSelectors";
import {useDispatch, useSelector} from "react-redux";
import {IRoute} from "../../interfaces/IRoute";
import {getData} from "../../redux/actions/getTasksDataActions";
import {Context} from "../../context";

export const TasksContainer=()=>{
    const data=useSelector((state:any):any=>state.tasksDataReducer)
    const {userData,currentDate}:any=useContext(Context)
    const dispatch=useDispatch()
    useEffect(()=>{
        console.log(userData)
                dispatch(getData(userData))
    },[userData])
    return(
        <div className={styles.taskContainer}>
        <TaskForm/>
            {data.map((todo:any)=>{
                return <Task todoDesc={todo.value}/>
            })}
        </div>
    )
}

/*{data.map((todo:any)=>{
    return <Task todo={todo}/>
})}*/