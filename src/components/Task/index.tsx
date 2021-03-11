import React from 'react';
import { useDispatch } from 'react-redux';
import { ITodo } from 'interfaces/ITodo';
import { getData, patchData } from 'redux/actions/getTasksDataActions';
import { useUserDataState } from 'selectors/stateSelectors';
import styles from './style.module.css';

export const Task = React.memo(({ value, done, id }:ITodo) => {
  const userData = useUserDataState();
  const dispatch = useDispatch();

  const dataToPatch = {
    ...userData, taskId: id, value,
  };

  const patchTasksData = () => {
    dispatch(patchData({ ...dataToPatch, done }));
    dispatch(getData(dataToPatch));
  };

  return (
    <div className={styles.taskContainer}>
      <div className={!done ? styles.description : styles.done}>
        {value}
      </div>
      <div>
        <i
          className={`fas fa-${!done ? 'check' : 'plus'}-circle`}
          onClick={patchTasksData}
        />
      </div>
    </div>
  );
});
