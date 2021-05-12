import React from 'react';
import { useDispatch } from 'react-redux';
import { ITasksDataReducer } from 'interfaces/ITasksDataReducer';
import {deleteData, getData, patchData} from 'redux/actions/tasksDataActions';
import { useUserDataState } from 'selectors/stateSelectors';
import styles from './style.module.css';

export const Task = React.memo(
    ({ value, done, id }: ITasksDataReducer): JSX.Element => {
        const userData = useUserDataState();

        const dispatch = useDispatch();

        const patchTasksData = () => {
            dispatch(patchData({ ...dataToPatch, done }));
            dispatch(getData(dataToPatch));
        };

        const deleteTasksData = () =>{
            dispatch(deleteData(dataToPatch));
            dispatch(getData(dataToPatch));
        };

        const dataToPatch = {
            ...userData,
            taskId: id,
            value,
        };

        return (
            <div className={styles.taskContainer}>
                <div className={!done ? styles.description : styles.done}>{value}</div>
                <div className={styles.buttonContainer}>
                    <i
                        className={`fas fa-${!done ? 'check' : 'plus'}-circle`}
                        onClick={patchTasksData}
                    />
                    <i
                        className={`fas fa-trash-alt ${styles.buttonDelete}`}
                        onClick={deleteTasksData}
                    />
                </div>
            </div>
        );
    }
);
