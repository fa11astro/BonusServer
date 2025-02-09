import React from "react"; 
import { Link } from "react-router-dom"; 
import './styles.css'; 
 
export const Footer = () => { 
    return ( 
        <footer className="footer"> 
            <p className="text">Исполняйте свои мечты вместе с нами!!!</p> 
            <nav className="footerNav"> 
                <div className="footerDiv"> 
                <Link className="footer-link" to="/shop">Каталог</Link> 
                <Link className="footer-link" to="/comment">Оставить отзыв</Link> 
                <Link className="footer-link" to="/">facebook</Link> 
                <Link className="footer-link" to="/">Github</Link> 
                <Link className="footer-link" to="/">Почта</Link> 
                </div> 
            </nav> 
        </footer> 
    ) 
}