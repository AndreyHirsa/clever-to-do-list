import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TaskForm } from 'components/TaskForm';
import { Task } from 'components/Task';
import { useTasksDataState, useUserDataState, useUserState } from 'selectors/stateSelectors';
import { getData } from 'redux/actions/getTasksDataActions';
import { patchUserData } from 'redux/actions/userDataActions';
import { ITodo } from 'interfaces/ITodo';
import styles from './style.module.css';

export const TasksContainer:React.FC = () => {
  const userState = useUserState();
  const userData = useUserDataState();
  const data = useTasksDataState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(patchUserData({ userId: userState!.user.uid }));
  }, [userState]);

  useEffect(() => {
    dispatch(getData(userData));
  }, [userData]);

  return (
    <div className={styles.taskContainer}>
      <TaskForm />
      <div className={styles.container}>
        {data.map((todo:ITodo) => (
          <Task
            key={todo.id}
            id={todo.id}
            value={todo.value}
            done={todo.done}
          />
        ))}
      </div>
    </div>
  );
};
