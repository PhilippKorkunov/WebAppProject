import React from 'react';
import styles from "./order-page/order-page.module.scss";
import {CardText} from "reactstrap";

const HomePage = () => {
    return (
        <div className = {styles.wrapper}>
            <CardText style = {{fontSize : 36}}>
                Добро пожаловать!
            </CardText>

            <CardText style = {{fontSize : 30}}>
                Это веб-приложение по созданию заказов и их просмотру.
            </CardText>
        </div>)
}


export default HomePage;