import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../Task';
import { TaskForm } from '../TaskForm';
import styles from './style.module.css';
import { useUserState } from '../../selectors/stateSelectors';
import { getData } from '../../redux/actions/getTasksDataActions';
import { patchUserData } from '../../redux/actions/userDataActions';

export const TasksContainer = () => {
  const userState = useUserState();
  const userData = useSelector((state:any):any => state.userDataReducer);
  const data = useSelector((state:any):any => state.tasksDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(patchUserData({ userId: userState.user.uid }));
  }, [userState]);

  useEffect(() => {
    if (userData.userId) dispatch(getData(userData));
  }, [userData]);

  return (
    <div className={styles.taskContainer}>
      <TaskForm />
      <div className={styles.container}>
        {data.map((todo:any) => <Task key={todo.id} id={todo.id} value={todo.value} done={todo.done} />)}
      </div>
    </div>
  );
};
