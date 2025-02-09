import React from "react";
import { LoginForm } from "../../component/LoginForm";
import { RegistrationForm } from "../../component/RegistrationForm";

import './styles.css'

export const Registration = () => {
    return (
        <div className="div">
            <div>
                <h1 className="reg">Регистрируйся, получай бонусы уже сейчас!</h1>
                <RegistrationForm/>
            </div>
        </div>
    )
}