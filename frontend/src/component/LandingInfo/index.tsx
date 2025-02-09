import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@alfalab/core-components/button";
import phone from "../../img/phone.png"
import study from "../../img/since.png"
import bonus from "../../img/getMoney.png"
import prizes from "../../img/kubok.png"
import './styles.css';

export const LandingInfo = () => {
    return (
        <div className="div">
            <div className="howWorking">
                <div>
                    <h2 className="landing-title">Обменивай бонусы на призы и скидки на курсы АИШ и ВИШ!</h2>
                    <hr className="line"></hr>
                    <p className="landing-text">Сервис, на котором можно обменять бонусы на классные призы из каталога</p>
                    <Button className="button moreBtn"><Link to="/ex">Получить бонусы!</Link></Button>
                </div>
                <div className="myImg">
                    <img src={phone} alt="телефончик" width={400} height={400}/>
                </div>
            </div>
            <article className="article">
                <section>
                <h2 className="landing-title2">Как это работает?</h2>
                </section>
                
                <div className="howWorking">
                <figure>
                <img src={study} alt="наука" width={320} height={300}/>
                <figcaption>
                <h1 className="circleH1">Проходи курсы!</h1>
                <p className="p">Получай новые знания, обучайся в АИШ/ВИШ</p>
                </figcaption>
                </figure>

                <figure>
                <img src={bonus} alt="бонусы" width={320} height={300}/>
                <figcaption>
                <h1 className="circleH1">Получай бонусы!</h1>
                <p className="p">Вознаграждение за каждый семестр и полное прохождение курса</p>
                </figcaption>
                </figure>

                <figure>
                <img src={prizes} alt="призы" width={340} height={300} className="img"/>
                <figcaption>
                <h1 className="circleH1">Меняй бонусы на призы и скидки!</h1>
                <p className="p">Используй бонусы на скидки на курсы или обменяй на крутые призы</p>
                </figcaption>
                </figure>
                </div>
            </article>
        </div>
    )
}