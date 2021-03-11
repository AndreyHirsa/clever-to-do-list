import React, { useEffect, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TaskForm } from 'components/TaskForm';
import { Task } from 'components/Task';
import { useTasksDataState, useUserDataState, useUserState } from 'selectors/stateSelectors';
import { getData } from 'redux/actions/getTasksDataActions';
import { patchUserData } from 'redux/actions/userDataActions';
import { ITodo } from 'interfaces/ITodo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import styles from './style.module.css';

export const TasksContainer:React.FC = () => {
  const userState = useUserState();
  const userData = useUserDataState();
  const { data, isFetching, hasError } = useTasksDataState();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(patchUserData({ userId: userState!.user.uid }));
  }, [userState]);

  useEffect(() => {
    dispatch(getData(userData));
  }, [userData]);

  useEffect(() => (hasError ? setOpen(true) : setOpen(false)), [data]);

  const handleClose = () => {
    setOpen(false);
  };

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
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          fail to update data
        </Alert>
      </Snackbar>
      {isFetching && <CircularProgress className={styles.animation} />}
    </div>
  );
};
