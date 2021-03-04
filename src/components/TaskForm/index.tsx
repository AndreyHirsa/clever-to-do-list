import {ChangeEvent, useContext, useState} from "react"
import styles from "./style.module.css";
import {Context} from "../../context";
import format from "date-fns/format";
import {useUserState} from "../../selectors/stateSelectors";
import firebase from "firebase";



export const TaskForm=()=>{
    const {inputText, setInputText,currentDay,setUserData}:any = useContext(Context)
    const userState=useUserState()

    const userData=
        {
            userId:userState.user.uid,
            year:format(currentDay, "yyy"),
            month:format(currentDay, "MMMM"),
            day:format(currentDay, "d"),
            value:inputText,
            taskId: new Date().getTime()
        }

    
    const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputText(value);
      };

      const isFormValid = !!inputText.trim();

      const saveData=(e:any)=>{
          e.preventDefault()
          setUserData(userData)
          firebase
              .database()
              .ref()
              .child(`${userData.userId}`)
              .child(`${userData.year}`)
              .child(`${userData.month}`)
              .child(`${userData.day}`)
              .child(`${userData.taskId}`)
              .set({value:userData.value,done:false,id:userData.taskId});
          setInputText('')
      }
      return (
        <form className={styles.form}>
          <input
            className={styles.inputText}
            value={inputText}
            onChange={inputTextHandler}
            type="text"
          />
          <button
            onClick={saveData}
            disabled={!isFormValid}
            className={
              !isFormValid
                ? styles.buttonAdd + " " + styles.disabled
                : styles.buttonAdd
            }
            type="submit"
          >
            ADD
          </button>
        </form>
      );
}