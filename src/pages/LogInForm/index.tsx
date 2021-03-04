import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import styles from './style.module.css';
import { logIn } from "../../redux/actions/userStateActions";

export const LogInForm=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    function emailHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setEmail(e.target.value);
    }

    function passwordHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setPassword(e.target.value);
    }

    function logInUser(): void {
        dispatch(logIn(email, password));
    }
    
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <Link to="/">
                    <button type="button" className={styles.close}>
                        <CloseIcon className={styles.closeIcon} />
                    </button>
                </Link>
                <TextField
                    className={styles.formInput}
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={emailHandler}
                    type="email"
                    required
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={passwordHandler}
                    type="password"
                    required
                />
                <Button onClick={logInUser}>Log in</Button>
            </form>
        </div>)
    
}