import {ChangeEvent, useContext, useEffect, useState} from "react"
import styles from "./style.module.css";
import {Context} from "../../context";
import format from "date-fns/format";
import {useUserState} from "../../selectors/stateSelectors";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { saveData } from "../../redux/actions/saveTasksDataActions";



export const TaskForm=()=>{
  const {inputText, setInputText,currentDay,setUserData}:any = useContext(Context)
  const userState=useUserState()
  const dispatch=useDispatch()

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

    const saveTasksData=(e:any)=>{
        e.preventDefault();
        setUserData(userData);
        dispatch(saveData(userData));
        setInputText('');
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
            onClick={saveTasksData}
            disabled={!isFormValid}
            className={
              !isFormValid
                ? styles.buttonAdd + " " + styles.disabled
                : styles.buttonAdd
            }
            type='submit'
          >
            ADD
          </button>
        </form>
      );
}

function currentDay(currentDay: any, arg1: string) {
  throw new Error("Function not implemented.");
}
