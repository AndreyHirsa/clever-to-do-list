import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.css';
import { saveData } from '../../redux/actions/saveTasksDataActions';
import { patchUserData } from '../../redux/actions/userDataActions';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state:any):any => state.userDataReducer);
  const [inputText, setInputText] = useState('');

  const generateId = () => String(new Date().getTime());

  const userDataToUpdate = { ...userData, taskId: generateId, value: inputText };

  const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputText(value);
  };

  const saveTasksData = (e:any) => {
    e.preventDefault();
    dispatch(patchUserData({ taskId: generateId, value: inputText }));
    dispatch(saveData(userDataToUpdate));
    setInputText('');
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
        onClick={saveTasksData}
        disabled={!isFormValid}
        className={
                    !isFormValid
                      ? `${styles.buttonAdd} ${styles.disabled}`
                      : styles.buttonAdd
                }
        type="submit"
      >
        ADD
      </button>
    </form>
  );
};
