import DoneIcon from '@material-ui/icons/Done';
import styles from "./style.module.css";
import {useUserData} from "../../selectors/stateSelectors";
import React from "react";

export const Task=({todoDesc}:any)=>{
    const data=useUserData()
    return(
    <div className={styles.taskContainer}>
      <div className={styles.description}>
          {todoDesc}
      </div> 
      <div>
          <button className={styles.buttonDone}><DoneIcon/></button>
      </div>         
    </div> 
    )  
}
