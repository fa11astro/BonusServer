import React from "react";
import { LoginForm } from "../../component/LoginForm";
import './styles.css'

export const EnterAccaunt = () => {
    return (
        <div className="div">
            <div>
                <h1 className="enter">Уже есть аккаунт?</h1>
                <LoginForm/>
            </div>
        </div>
    )
}