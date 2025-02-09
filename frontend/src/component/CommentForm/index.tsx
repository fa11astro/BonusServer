import React, { ChangeEvent, Component, useEffect } from 'react' 
import './styles.css' 
import { format } from 'date-fns' 
import axios from 'axios'; 
import authHeader from '../../utils';
 
export const CommentForm = () => { 
    const BACKEND_URL = 'http://localhost:4000';

    const [userData, setUserData] = React.useState({ 
        photo: '', 
        name: '', 
        id: '', 
        balance: 0, 
    }); 

    const [comment, setComment] = React.useState<string>('') 
    const [comments, setComments] = React.useState<string[]>([]) 
 
    const addComment = (): void => {         
        const newComments = comments? [...comments, comment] : [comment] 
        setComments(newComments) 
        localStorage.setItem('comments', JSON.stringify(newComments)) 
        setComment('') 
 
    } 
 
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => { 
        setComment(e.target.value) 
    } 
 
    const getUserInfo = () => { 
        axios.get(`${BACKEND_URL}/user/me`, { 
            headers: authHeader(), 
        }).then((result) => { 
            const data = result.data.response; 
            if (data) { 
                setUserData({ 
                    photo: data.photo, 
                    name: data.name, 
                    id: data.id, 
                    balance: data.balance, 
                }) 
            } 
        }) 
    }; 
    React.useEffect(() => { 
        getUserInfo(); 
        setComments(localStorage.getItem('comments') 
            ? JSON.parse(localStorage.getItem('comments') as string) : null 
        ) 
    }, []); 
  
     
 
    return <div>
                <div>
                    <div>
                        <label> 
                            <textarea 
                            className="textdict" 
                            value={comment} 
                            onChange={onChangeHandler}> 
                            </textarea> 
                        </label> 
                    <div> 
                    <button onClick={addComment} className = "button"> 
                        Добавить комментарий 
                    </button> 
                </div> 
                </div> 
                    {comments && comments.map((c, i) => <p key={i}> 
                    <img width="90" src={userData.photo}></img> 
                    <h1>{userData.name}</h1> 
                    <h2>Комментарии:</h2>
                    {c}</p>)} 
                </div> 
            </div>
}