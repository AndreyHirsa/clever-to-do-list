import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import { logOut } from 'redux/actions/userStateActions';
import { useUserState } from 'selectors/stateSelectors';
import styles from './style.module.css';

export const HeaderNavigation = (): JSX.Element => {
    const user = useUserState();
    const dispatch = useDispatch();

    const logOutFn = () => {
        dispatch(logOut());
    };

    return (
        <div className={styles.headerNavWrapper}>
            <h2>TASSKER</h2>
            {user ? (
                <div>
                    <button className={styles.headerButton} onClick={logOutFn}>Log Out</button>
                </div>
            ) : (
                <Toolbar>
                    <Link to="/log_in">
                        <button className={styles.headerButton}>Log in</button>
                    </Link>
                    <Link to="/sign_up">
                        <button className={styles.headerButton}>Sign up</button>
                    </Link>
                </Toolbar>
            )}
        </div>
    );
};
