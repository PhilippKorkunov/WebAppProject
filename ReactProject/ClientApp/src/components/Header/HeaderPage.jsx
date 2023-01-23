import React from 'react';
import { Button} from 'antd';
import styles from "./header.module.scss"
import {Link} from "react-router-dom";

const HeaderPage = () => {
    return (
       <div className={styles.header}>
           <Button size={"large"} type="primary"><Link to={"/create"}>Оформить заказ</Link></Button>
           <Button size={"large"} type="primary"><Link to={"/order"}>Страница заказов</Link></Button>
       </div>
    );
};

export default HeaderPage;