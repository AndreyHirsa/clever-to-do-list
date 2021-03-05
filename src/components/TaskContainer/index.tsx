import React, {useContext, useEffect, useMemo} from "react"
import { Task } from "../Task"
import { TaskForm } from "../TaskForm"
import styles from "./style.module.css";
import {useUserData} from "../../selectors/stateSelectors";
import {useDispatch, useSelector} from "react-redux";
import {IRoute} from "../../interfaces/IRoute";
import {getData} from "../../redux/actions/getTasksDataActions";
import {Context} from "../../context";

export const TasksContainer=()=>{
    const {userData}:any=useContext(Context)
    const data=useSelector((state:any):any=>state.tasksDataReducer)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getData(userData))
    },[dispatch, userData])

    return(
        <div className={styles.taskContainer}>
        <TaskForm/>
            {data.map((todo:any)=>{
                return <Task id={todo.id} value={todo.value} done={todo.done}/>
            })}
        </div>
    )
}
