import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Toolbar } from '@material-ui/core';
import React from 'react';
import { logOut } from '../../redux/actions/userStateActions';
import { useUserState } from '../../selectors/stateSelectors';
import styles from './style.module.css';

export const HeaderNavigation = () => {
  const user = useUserState();
  const dispatch = useDispatch();

  const logOutFn = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.headerNavWrapper}>
      <h2>TASSKER</h2>
      {user
        ? (
          <div>
            <Button onClick={logOutFn}>Log Out</Button>
          </div>
        )
        : (
          <Toolbar>
            <Link to="/log_in">
              <Button className={styles.buttonRedirect}>
                log in
              </Button>
            </Link>
            <Link to="/sign_up">
              <Button>
                Sign up
              </Button>
            </Link>
          </Toolbar>
        )}
    </div>
  );
};
