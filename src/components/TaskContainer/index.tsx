import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../Task';
import { TaskForm } from '../TaskForm';
import styles from './style.module.css';
import { useTasksDataState, useUserDataState, useUserState } from '../../selectors/stateSelectors';
import { getData } from '../../redux/actions/getTasksDataActions';
import { patchUserData } from '../../redux/actions/userDataActions';
import { ITodo } from '../../interfaces/ITodo';

export const TasksContainer = () => {
  const userState = useUserState();
  const userData = useUserDataState();
  const data = useTasksDataState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(patchUserData({ userId: userState!.user.uid }));
  }, [userState]);

  useEffect(() => {
    if (userData.userId) dispatch(getData(userData));
    dispatch(getData(userData));
  }, [userData]);

  return (
    <div className={styles.taskContainer}>
      <TaskForm />
      <div className={styles.container}>
        {data.map((todo:ITodo) => <Task key={todo.id} id={todo.id} value={todo.value} done={todo.done} />)}
      </div>
    </div>
  );
};
