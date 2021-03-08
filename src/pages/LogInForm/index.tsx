import { Button, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import styles from './style.module.css';
import { logIn, logInFailure } from '../../redux/actions/userStateActions';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const errorMessage:string = useSelector((state:any) => state.userStateReducer.error);
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    dispatch(logInFailure(''));
  }, []);

  function logInUser(data:any): void {
    dispatch(logIn(data.email, data.password));
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(logInUser)} className={styles.form}>
        <h3>LOG IN</h3>
        <Link to="/">
          <button type="button" className={styles.close}>
            <CloseIcon className={styles.closeIcon} />
          </button>
        </Link>
        <TextField
          className={styles.formInput}
          label="Email"
          variant="outlined"
          name="email"
          inputRef={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
        {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          inputRef={register({
            required: 'Required',
            minLength: {
              value: 8,
              message: 'must be 8 characters at least',
            },
          })}
        />
        {errors.password && <Alert severity="error">{errors.password.message}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Button className={styles.buttonSubmit} type="submit">submit</Button>
      </form>
    </div>
  );
};
