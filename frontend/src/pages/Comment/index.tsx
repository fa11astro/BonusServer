import React from "react"; 
import { CommentForm } from "../../component/CommentForm"; 
import comments from "../../img/comments.png" 
import './styles.css'; 
 
export const Comment = () => { 
    return ( 
        <div className="divCom"> 
            <div className="div"> 
                <h1>Оставить комментарий</h1> 
                <h2 className="landing-text">Нам очень важно ваше мнение. Оставьте отзыв, помогите сделать сервис удобнее!</h2> 
                <CommentForm/> 
            </div> 
            <div className="chImg"> 
                <img src={comments} alt="=комментарии" width={400} height={450}/> 
            </div> 
        </div> 
    ) 
}