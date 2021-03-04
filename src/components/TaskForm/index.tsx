import { ChangeEvent, useState } from "react"
import styles from "./style.module.css";

export const TaskForm=()=>{
    const [inputText, setInputText] = useState("")
    
    const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputText(value);
      };

      const isFormValid = !!inputText.trim();

      return (
        <form className={styles.form}>
          <input
            className={styles.inputText}
            value={inputText}
            onChange={inputTextHandler}
            type="text"
          />
          <button
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