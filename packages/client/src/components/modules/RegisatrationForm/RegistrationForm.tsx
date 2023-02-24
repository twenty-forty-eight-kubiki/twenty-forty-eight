import './RegistrationForm.scss'
import React, { FormEvent, ReactElement, useState } from 'react'
import GuiInput from '../../ui/GuiInput/GuiInput'
import GuiButton from '../../ui/GuiButton/GuiButton'

const RegistrationForm = (): ReactElement => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    }


    const onChangeFirstname = (e: FormEvent) => {
        setFirstname((e.target as HTMLInputElement).value);
    }

    const onChangeSurname = (e: FormEvent) => {
        setSurname((e.target as HTMLInputElement).value);
    }

    const onChangeEmail = (e: FormEvent) => {
        setEmail((e.target as HTMLInputElement).value);
    }

    const onChangePassword = (e: FormEvent) => {
        setPassword((e.target as HTMLInputElement).value);
    }

    const onChangeConfirmPassword = (e: FormEvent) => {
        setConfirmPassword((e.target as HTMLInputElement).value);
    }

    return (
        <div className="registration-form">
            <div className="registration-form-inner">
                <div className="registration-form-wrapper">
                    <div>
                        <h1 className="registration-form-title">Sign Up</h1>

                        <div className="registration-form-text">To continue, please, sign up!</div>
                    </div>

                    <form onSubmit={onSubmit}>
                        <GuiInput
                            label="FirstName"
                            placeholder="Enter your firstname"
                            value={firstname}
                            onChange={onChangeFirstname}
                        />

                        <GuiInput
                            label="Surname"
                            placeholder="Enter your surname"
                            value={surname}
                            onChange={onChangeSurname}
                        />

                        <GuiInput
                            label="Email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={onChangeEmail}
                        />

                        <GuiInput
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={onChangePassword}
                        />

                        <GuiInput
                            label="Repeat Password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={onChangeConfirmPassword}
                        />

                        <GuiButton
                            type="submit"
                            btnText="Sign up"
                            className="registration-form-btn"
                        />

                        <div className="registration-form-info">
                            Already have an account <a className="base-link">Log in</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm
