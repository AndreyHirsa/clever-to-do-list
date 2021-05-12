import { Button, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import { logIn, logInFailure } from 'redux/actions/userStateActions';
import { useLoginError } from 'selectors/stateSelectors';

export const LogInForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const errorMessage = useLoginError();
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        if (errorMessage) dispatch(logInFailure(''));
    }, []);

    function logInUser(data: Record<string, string>) {
        dispatch(logIn(data.email, data.password));
    }

    return (
        <div className={'formContainer'}>
            <form onSubmit={handleSubmit(logInUser)} className={'form'}>
                <h3>LOG IN</h3>
                <Link to="/home_page">
                    <button type="button" className={'close'}>
                        <CloseIcon className={'closeIcon'} />
                    </button>
                </Link>
                <div className={'fieldContainer'}>
                    <TextField
                        fullWidth
                        className={'formInput'}
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
                </div>
                <div className={'fieldContainer'}>
                    <TextField
                        fullWidth
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
                    {errors.password && (
                        <Alert severity="error">{errors.password.message}</Alert>
                    )}
                    {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                </div>
                <Button className={'buttonSubmit'} type="submit">
          submit
                </Button>
            </form>
        </div>
    );
};
