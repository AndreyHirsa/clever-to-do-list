import DoneIcon from '@material-ui/icons/Done';
import styles from "./style.module.css";

export const Task=()=>{
    return(
    <div className={styles.taskContainer}>
      <div className={styles.description}>
      </div> 
      <div>
          <button className={styles.buttonDone}><DoneIcon/></button>
      </div>         
    </div> 
    )  
}
