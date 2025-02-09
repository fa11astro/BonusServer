import React from "react"; 
import './styles.css'; 
import Denga from "../../img/Denga.png" 
 
export const ExercisesForm = () => { 
    return ( 
        <div className="flexDiv"> 
            <div> 
                <h2 className="exh2">Проходи курсы, принимай участие в мероприятиях, олимпиадах и получай кучу бонусов!</h2> 
                <ul className="ul"> 
                    <li className="li">Пригласи друга в АИШ/ВИШ</li> 
                    <p className="exp">получи 300 бонусов</p> 
 
                    <li className="li">Заверши обучение на одном из семестров в АИШ/ВИШ</li> 
                    <p className="exp">получи 500 бонусов</p> 
 
                    <li className="li">Пройди полный курс в АИШ</li> 
                    <p className="exp">получи 700 бонусов</p> 
 
                    <li className="li">Пройди полный курс в ВИШ</li> 
                    <p className="exp">получи 600 бонусов</p> 
 
                    <li className="li">Поучаствуй в Политех-квесте/Политех-кроссе</li> 
                    <p className="exp">получи 400 бонусов</p> 
 
                    <li className="li">Стань призёром/победителем в Политех-квесте/Политех-кроссе</li> 
                    <p className="exp">получи 700 бонусов</p> 
 
                    <li className="li">Поучаствуй в в олимпиаде Мартовские КИТы/КИТята</li> 
                    <p>получи 400 бонусов</p> 
 
                    <li className="li">Стань призёром/победителем в олимпиаде Мартовские КИТы/КИТята</li> 
                    <p className="exp">получи 700 бонусов</p> 
 
                    <li className="li">Поучаствуй в в олимпиаде Политехнической олимпиаде (матем./инф./физ./хим.)</li> 
                    <p className="exp">получи 400 бонусов</p> 
 
                    <li className="li">Стань призёром/победителем в Политехнической олимпиаде (матем./инф./физ./хим.)</li> 
                    <p className="exp">получи 1000 бонусов</p> 
                </ul> 
            </div> 
             
            <div className="myExImg"> 
                <img src={Denga} alt="деньги" width={380} height={400}/> 
            </div> 
        </div> 
    ) 
}