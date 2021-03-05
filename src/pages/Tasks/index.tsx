import React, {useEffect, useState} from "react"
import { Calendar } from "../../components/Calendar";
import { TasksContainer } from "../../components/TaskContainer"
import { Context } from "../../context";
import styles from './style.module.css';
import {useUserState} from "../../selectors/stateSelectors";
import format from "date-fns/format";

export const Tasks:React.FC =():JSX.Element=>{
    const userState=useUserState()
    const [currentDay,setCurrentDay]=useState(new Date())
    const [inputText, setInputText] = useState("")

    const [userData,setUserData]=useState({
        userId:userState.user.uid,
        year:format(currentDay, "yyy"),
        month:format(currentDay, "MMMM"),
        day:format(currentDay, "d"),
        value:inputText,
        taskId: new Date().getTime()
    })

    return(
        <Context.Provider value={{currentDay,setCurrentDay,inputText, setInputText,userData,setUserData}}>
        <div className={styles.tasksContainer}>
        <TasksContainer/>
        <Calendar/>
        </div>
        </Context.Provider>
    )
}