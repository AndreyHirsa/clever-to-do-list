import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveData } from 'redux/actions/tasksDataActions';
import { patchUserData } from 'redux/actions/userDataActions';
import { useUserDataState } from 'selectors/stateSelectors';
import styles from './style.module.css';

export const TaskForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const userData = useUserDataState();
    const [inputText, setInputText] = useState('');
    const userDataToUpdate = { ...userData, value: inputText };

    const inputTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputText(value);
    };

    const saveTasksData = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        dispatch(patchUserData({ value: inputText }));
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
