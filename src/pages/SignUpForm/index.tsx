import { Button, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import { resetMessage, signUp } from 'redux/actions/signUpActions';
import { useSignUpState } from 'selectors/stateSelectors';

export const SignUpForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const { message } = useSignUpState();

    useEffect(() => {
        if (message.value) dispatch(resetMessage());
    }, []);

    const signUpUser = (data: Record<string, string>) => {
        dispatch(signUp(data.email, data.password));
    };

    return (
        <div className={'formContainer'}>
            <form onSubmit={handleSubmit(signUpUser)} className={'form'}>
                <h3>SIGN UP</h3>
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
                    {message.value && (
                        <Alert severity={message.type}>{message.value}</Alert>
                    )}
                </div>
                <Button className={'buttonSubmit'} type="submit">
          submit
                </Button>
            </form>
        </div>
    );
};
