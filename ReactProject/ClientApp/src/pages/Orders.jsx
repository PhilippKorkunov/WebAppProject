import React, {useEffect, useState} from 'react';
import {Button, Table} from "antd";
import axios from "axios";
import {Link} from "react-router-dom";

const Orders = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7072/api/WebApp/GetAllOrders")
             .then(response => setData(response.data))
             .catch(err => console.log(err))
    }, [])

    const columns = [
        {
            title: 'Номер',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Город отправителя',
            dataIndex: 'sourceCity',
            key: 'sourceCity',
        },
        {
            title: 'Адрес отправителя',
            dataIndex: 'sourceAddress',
            key: 'sourceAddress',
        },
        {
            title: 'Город получателя',
            dataIndex: 'distCity',
            key: 'distCity',
        },
        {
            title: 'Адрес получателя',
            dataIndex: 'distAddress',
            key: 'distAddress',
        },
        {
            title: 'Вес, г',
            dataIndex: 'weight',
            key: 'weight',
        },
        {
            title: "Дата",
            dataIndex: "date",
            key: "date"
        },
        {
            title: "Перейти к заказу",
            dataIndex: "id",
            key: "button",
            render: (it, row) => <Button type={"primary"}><Link to={`/order/${it}/`}>Перейти</Link></Button>
        }

    ];
    return (
        <div style={{padding: 24}}>
            <Table
                pagination={{
                    defaultPageSize: 15,
                    pageSizeOptions: ["10", "15", "20", "25", "50", "100"],
                    showSizeChanger: true
                }}
                dataSource={data}
                columns={columns}
            />
        </div>
    );
};

export default Orders;