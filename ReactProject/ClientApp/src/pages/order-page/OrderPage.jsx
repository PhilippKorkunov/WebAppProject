import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styles from "./order-page.module.scss"
import {Card} from "antd";
import axios from "axios";

const OrderPage = () => {
        const params = useParams();
        const [data, setData] = useState({});

        useEffect(() => {
            axios.get("https://localhost:7072/api/WebApp/GetOrder", { params: { Id: params.id } })
                 .then(response =>  setData(response.data[0]))
                 .catch(err => console.log(err))

            //setData(orders)
        }, [])

        return (
            <div className={styles.wrapper}>
                <Card type="inner" title={`Заказ № ${data.id}`} bordered={true} style={{ width: 800 }}>
                    <p>
                        Город отправителя: {data.sourceCity}
                    </p>
                    <p>
                        Адрес отправителя: {data.sourceAddress}
                    </p>
                    <p>
                        Город доставки: {data.distCity}
                    </p>
                    <p>
                        Адрес доставки: {data.distAddress}
                    </p>
                    <p>
                        Вес: {data.weight}
                    </p>
                    <p>
                        Дата: {data.date}
                    </p>
                </Card>
            </div>
        );
    }
;

export default OrderPage;