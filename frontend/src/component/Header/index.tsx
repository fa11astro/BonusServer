import React from "react"; 
import { Link } from "react-router-dom"; 
import logo from "../../img/logoBT.jpg"; 
 
import './styles.css'; 
 
export const Header = () => { 
    return ( 
        <header className="header"> 
            <Link className="header-link" to="/"> 
                <h1 className="logo"><img src={logo} alt="логотип" width={150} height={80}/></h1> 
            </Link> 
            <nav className="nav">
                <Link className="header-link" to="/profile">Профиль</Link> 
                <Link className="header-link" to="/transfers">Перевести баллы</Link> 
                <Link className="header-link" to="/shop">Каталог</Link> 
                <Link className="header-link" to="/ex">Задания</Link> 
                <Link className="header-link" to="/enter"><button className="enterBtn">Войти</button></Link> 
                <Link className="header-link" to="/register"><button className="regBtn">Регистрация</button></Link> 
            </nav> 
        </header>
    ) 
}