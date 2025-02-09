import { Button } from "@alfalab/core-components/button";
import {Notification} from '@alfalab/core-components/notification';
import axios from "axios";
import React from "react";
import authHeader from "../../utils";
import znachok from "../../img/znachok.png"
import nabor from "../../img/nabor.png"
import tShirt from "../../img/tShirt.png"
import hoddie from "../../img/hoddie.png"


import './styles.css';

const BACKEND_URL = 'http://localhost:4000';

export interface Product {
    title: string;
    description: string;
    image: string;
    price: number;
    id: string;
    updatedAt: string;
    createdAt: string;
}

/*export const ShopForm = () => {
    const [products, setProducts] = React.useState([]);
    const [status, setStatus] = React.useState("positive" as "positive" | "negative");
    const [isVisible, setIsVisible] = React.useState(false);
    const hideNotification = React.useCallback(() => setIsVisible(false), []);

    const getAllProducts = () => {
        axios.get(`${BACKEND_URL}/products`, {
            headers: authHeader()
        }).then((result) => {
            const data = result.data.response;

            if (data) {
                setProducts(data);
            }
        })
    }

    const buyProduct = (productId: string) => {
        axios.post(`${BACKEND_URL}/operations/purchase`, {
            productId
        }, {
            headers: authHeader()
        }).then((result) => {
            const data = result.data.response;
            setIsVisible(true);
            setStatus(Boolean(data) ? "positive" : "negative");
        }).catch(() => {
            setIsVisible(true);
            setStatus("negative");
        })
    }

    React.useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <div>
            <h1>Каталог</h1>
            <Notification
                badge={status}
                title="Уведомление о покупке"
                visible={isVisible}
                offset={180}
                onClickOutside={hideNotification}
                onClose={hideNotification}
                onCloseTimeout={hideNotification}
            >
                {status === "positive" ? "Поздравляем с покупкой" : "Не удалось совершить покупку :("}
            </Notification>
            <div className="products">
                {products.map((item: Product, key) => {
                    return (
                        <div className="product" key={key}>
                            <h3 className="product-title">{item.title}</h3>
                            <p>{item.description}</p>
                            <img width="100%" src={item.image}/>
                            <div className="product-price">{item.price} баллов</div>
                            <Button 
                                className="button product-button"
                                onClick={() => buyProduct(item.id)}
                            >Купить</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}*/

export const ShopForm = () => {
    const BACKEND_URL = 'http://localhost:4000';
    const [balance, setUserBalance] = React.useState(0);
    const [status, setStatus] = React.useState("positive" as "positive" | "negative");
    const [isVisible, setIsVisible] = React.useState(false);
    const hideNotification = React.useCallback(() => setIsVisible(false), []);


    const [userData, setUserData] = React.useState({
        balance: 0,
    });
    const getUserBalance = () => {
        axios.get(`${BACKEND_URL}/user/me`, {
            headers: authHeader(),
        }).then((result) => {
            const data = result.data.response;
            if (data) {
                console.log(data)
                setUserData({
                    balance: data.balance,
                })
            }
        })
    };
    React.useEffect(() => {
        getUserBalance();
    }, []);

    const makeTransfer = () => {
        axios.post(`${BACKEND_URL}/operations/transfer`, {
            paymentAmount: 0,
        }, {
            headers: authHeader()
        }).then(() => {
            getUserBalance()
            setStatus("positive")
        }).catch(() => {
            setStatus("negative")
        }).finally(() => {
            setIsVisible(true)
        })
    }

    return (
        <div className="div">
            <div className="transfers-wrapper">
                <div>
                <h1>Каталог</h1>
                <h2 className="pp">Товары, которые вы можете получить за бонусы!</h2>
                </div>

                <div className="shopB">
                <p className="your-balance">
                    Ваш баланс: <span className="bonuses">{userData.balance} бонусов</span>
                </p>
                </div>
            </div>
                <article className="article">
                <div className="howWorking">
                    
                <figure>
                    <img src={znachok} alt="значок" width={240} height={182}/>
                    <figcaption>
                        <h2>Значок</h2>
                        <p className="pColor">АИШ/Политех на выбор</p>
                        <p className="colorP">100 бонусов</p>
                        <Button className="sendBtn" onClick={makeTransfer}>Обменять</Button>
                    </figcaption>
                </figure>

                <figure>
                <img src={nabor} alt="канц. набор" width={182} height={182}/>
                <figcaption>
                    <h2>Канцелярский набор</h2>
                    <p className="pColor">2 тетради и 2 ручки Политех</p>
                    <p  className="colorP">500 бонусов</p>
                    <Button className="sendBtn" onClick={makeTransfer}>Обменять</Button>
                </figcaption>
                </figure>

                <figure>
                <img src={tShirt} alt="футболка" width={182} height={182}/>
                <figcaption>
                    <h2>Футболка</h2>
                    <p className="pColor">АИШ/Политех на выбор</p>
                    <p  className="colorP">1500 бонусов</p>
                    <Button className="sendBtn" onClick={makeTransfer}>Обменять</Button>
                </figcaption>
                </figure>

                <figure>
                <img src={hoddie} alt="толстовка" width={182} height={182}/>
                <figcaption>
                    <h2>Толстовка</h2>
                    <p className="pColor">Политех, цвет на выбор</p>
                    <p  className="colorP">3000 бонусов</p>
                    <Button className="sendBtn" onClick={makeTransfer}>Обменять</Button>
                </figcaption>
                </figure>
                </div>
                </article>

            <Notification
                badge={status}
                title="Уведомление о покупке"
                visible={isVisible}
                offset={180}
                onClickOutside={hideNotification}
                onClose={hideNotification}
                onCloseTimeout={hideNotification}
            >
                {status === "positive" ? "Поздравляем с покупкой! ;)" : "Упс!. Не хватает бонусов :("}
            </Notification>
        </div>
    )
}