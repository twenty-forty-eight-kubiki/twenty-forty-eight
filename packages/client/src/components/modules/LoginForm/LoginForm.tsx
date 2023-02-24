import './LoginForm.scss'
import React, {FormEvent, ReactElement, useState} from "react";
import GuiInput from "../../ui/GuiInput/GuiInput";
import GuiButton from "../../ui/GuiButton/GuiButton";

const LoginForm = (): ReactElement => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(email, password);
    }

    const onChangeEmail = (e: FormEvent) => {
        setEmail((e.target as HTMLInputElement).value);
    }

    const onChangePassword = (e: FormEvent) => {
        setPassword((e.target as HTMLInputElement).value);
    }

    return (
        <div className="login-form">
            <div className="login-form-inner">
                <div className="login-form-wrapper">
                    <div>
                        <h1 className="login-form-title">Log In</h1>

                        <div className="login-form-text">Welcome to the 2048 Game</div>
                    </div>

                    <form onSubmit={onSubmit}>
                        <GuiInput
                            label="Email"
                            placeholder="example@yandex.ru"
                            value={email}
                            onChange={onChangeEmail}
                        />

                        <GuiInput
                            label="Password"
                            placeholder="password"
                            value={password}
                            onChange={onChangePassword}
                        />

                        <GuiButton
                            type="submit"
                            btnText="Log in"
                            className="login-form-btn"
                        />

                        <div className="login-form-info">
                            Don't have an account? <a className="base-link">Sign up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm