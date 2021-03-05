import DoneIcon from '@material-ui/icons/Done';
import styles from "./style.module.css";
import React, { useContext } from "react";
import { Context } from '../../context';
import { patchData } from '../../redux/actions/patchTasksDataActions';
import { useDispatch } from 'react-redux';
import { ITodo } from '../../interfaces/ITodo';
import { IUserData } from '../../interfaces/IUserData';

export const Task=({value,done,id}:ITodo)=>{
    const {userData}:any=useContext(Context)
    const dispatch=useDispatch()
    const patchTasksData=():void=>{
        console.log(userData)
       dispatch(patchData({...userData,done,id}))
    }
    return(
    <div className={styles.taskContainer}>
      <div className={!done?styles.description:styles.done}>
          {value}
      </div> 
      <div>
          <button className={styles.buttonDone} onClick={patchTasksData}><DoneIcon/></button>
      </div>         
    </div> 
    )  
}
