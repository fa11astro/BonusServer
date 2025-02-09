import axios from "axios";
import React, { ChangeEvent } from "react";
import { OptionShape, Select } from '@alfalab/core-components/select';
import authHeader from "../../utils";
import { Input } from "@alfalab/core-components/input";
import { Button } from "@alfalab/core-components/button";
import {Notification} from '@alfalab/core-components/notification';

import './styles.css'

type UserOption = {
    name: string;
    id: string;
}

type OnSelectProps = {
    selected: OptionShape | null;
    selectedMultiple: OptionShape[];
    initiator: OptionShape | null;
    name?: string;
}

type UserSchema = {
    name: string;
    photo: string;
    email: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}


type TransferOperation = {
    paymentType: 'transfer' | 'purchase' | 'present';
    updatedAt: string;
    createdAt: string;
    id: string;
    paymentAmount: number;
    incomingAccount: UserSchema;
    outgoingAccount: UserSchema;
}

export interface Product {
    title: string;
    description: string;
    image: string;
    price: number;
    id: string;
    updatedAt: string;
    createdAt: string;
}

export const TransferForm = () => {
    const BACKEND_URL = 'http://localhost:4000';
    const [balance, setUserBalance] = React.useState(0);
    const [amountToTransfer, setAmountToTransfer] = React.useState(0);
    const [options, setOptions] = React.useState([] as OptionShape[]);
    const [recipientId, setRecipientId] = React.useState('');
    const [userTranfers, setUserTransfers] = React.useState([]);
    const [status, setStatus] = React.useState("positive" as "positive" | "negative");
    const [isVisible, setIsVisible] = React.useState(false);
    const hideNotification = React.useCallback(() => setIsVisible(false), []);

    const getUserBalance = () => {
        axios.get(`${BACKEND_URL}/user/me`, {
            headers: authHeader(),
        }).then((result) => {
            const data = result.data.response;
            if (data) {
                setUserBalance(data.balance)
            }
        })
    };
    const getOtherUsers = () => {
        axios.get(`${BACKEND_URL}/user/usersWithoutMe`, {
            headers: authHeader(),
        }).then((result) => {
            const data = result.data.response;
            if (data) {
                setOptions(data.map((item: UserOption) => {
                    return {
                        key: item.id, content: item.name
                    }
                }))
            }
        })
    }
    const handleChange = ({ selected }: OnSelectProps) => {
        if (selected) {
            setRecipientId(selected.key);
        }
    };

    const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setAmountToTransfer(+value);
    }

    const makeTransfer = () => {
        axios.post(`${BACKEND_URL}/operations/transfer`, {
            paymentAmount: amountToTransfer,
            incomingAccount: recipientId,
        }, {
            headers: authHeader()
        }).then(() => {
            getUserBalance()
            getUserTransfers()
            setStatus("positive")
        }).catch(() => {
            setStatus("negative")
        }).finally(() => {
            setIsVisible(true)
        })
    }

    const getUserTransfers = () => {
        axios.get(`${BACKEND_URL}/user/operations`, {
            headers: authHeader()
        }).then((result) => {
            const data = result.data.response;
            setUserTransfers(data);
        })
    }

    React.useEffect(() => {
        getUserBalance();
        getOtherUsers();
        getUserTransfers();
    }, [])
    return (
        <div className="div">
            <h1>Страница переводов</h1>
            <Notification
                badge={status}
                title="Уведомление о переводе"
                visible={isVisible}
                offset={180}
                onClickOutside={hideNotification}
                onClose={hideNotification}
                onCloseTimeout={hideNotification}
            >
                {status === "positive" ? "Поздравляем с переводом! ;)" : "Не удалось совершить перевод. Нельзя переводить меньше 10 бонусов :("}
            </Notification>
            <p className="your-balance">
                Ваш баланс: <span className="bonuses">{balance} бонусов</span>
            </p>
            <div className="transfers-wrapper">
                <div>
                    <Select
                        className="select-field"
                        options={options}
                        placeholder="id получателя"
                        onChange={handleChange}
                    />
                    <Input
                        className="field"
                        placeholder="Сколько отправляем?"
                        onChange={handleAmount}
                    />
                    <Button className="sendBtn" onClick={makeTransfer}>Перевести</Button>
                </div>
                <div className="div2">
                    <h2>Переводы</h2>
                    {userTranfers.map((item: TransferOperation, key: number) => {
                        return (
                            <div key={key}>
                                <hr />
                                <p>Тип операции: {item.paymentType}</p>
                                <p>
                                    Количество: {item.paymentAmount}
                                </p>
                                <p>Получатель: {item.incomingAccount.name}</p>
                                {item.outgoingAccount?.name && <p>Отправитель: {item.outgoingAccount.name}</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}