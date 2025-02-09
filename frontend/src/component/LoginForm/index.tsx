import React, {ChangeEvent, useState} from "react";
import {Input} from "@alfalab/core-components/input";
import {Button} from "@alfalab/core-components/button";
import signIn from "../../img/createAcc.png"

import './styles.css'
import {useNavigate} from "react-router";
import axios from "axios";

export const LoginForm = () => {
    const navigate = useNavigate();
    const BACKEND_URL = 'http://localhost:4000';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const change = (event: ChangeEvent<HTMLInputElement>, field: 'email' | 'password') => {
        const value = event.target.value;
        switch (field) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
        }
    };
    const submitForm = async () => {
        const result = await axios.post(`${BACKEND_URL}/auth/login`, {
            email,
            password,
        });

        if (result) {
            localStorage.setItem('user', JSON.stringify(result.data));
            navigate('/profile');
        }
    };
    return (
        <div className="sign">
            <form>
                <Input
                    className="field"
                    value={email}
                    placeholder="Email"
                    type="email"
                    onChange={(event) => change(event, 'email')}
                />
                <Input
                    className="field"
                    value={password}
                    placeholder="Пароль"
                    type="password"
                    onChange={(event) => change(event, 'password')}
                />
                <Button
                    className="button"
                    onClick={submitForm}
                >
                    Войти
                </Button>
            </form>

            <div className="signImg">
                <img src={signIn} alt="вход" width={400} height={430}/>
            </div>
        </div>
    )
};