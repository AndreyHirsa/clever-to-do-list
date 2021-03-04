import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import styles from './style.module.css';
import { signUp } from "../../redux/actions/signUpActions";

export const SignUpForm=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const errorMessage:any=useSelector((state:any)=>state.signUpReducer.error)

    function emailHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setEmail(e.target.value);
    }

    function passwordHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        setPassword(e.target.value);
    }

    function signUpUser(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void {
        e.preventDefault();
        console.log(email,password)
        dispatch(signUp(email, password));
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
                <p>{errorMessage}</p>
                <Button onClick={signUpUser}>Sign Up</Button>
            </form>
        </div>)
    
}