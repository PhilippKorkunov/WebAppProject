import React from 'react';
import {Button, DatePicker, Form, InputNumber, Typography } from 'antd';
import axios from "axios";
import locale from 'antd/es/date-picker/locale/ru_RU';
import TextArea from "antd/lib/input/TextArea";

const { Title } = Typography;


const FormPage = () => {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        await axios.post("https://localhost:7072/api/WebApp/AddOrder", values)
        form.resetFields()
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <Title>Оформить заказ</Title>
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{width: "40%"}}
            >
                <Form.Item
                    label="Город отправления"
                    name="SourceCity"
                    rules={[
                        {
                            required: true,
                            message: 'Введите город отправления',
                        },
                    ]}
                >
                    <TextArea
                        placeholder="Санкт-Петергбург"
                        autoSize={{ minRows: 1, maxRows: 2 }}
                    />
                </Form.Item>

                <Form.Item
                    label="Адрес отправления"
                    name="SourceAddress"
                    rules={[
                        {
                            required: true,
                            message: 'Введите адрес отправления',
                        },
                    ]}
                >
                    <TextArea
                        placeholder="Невский пр., д.1, кв.1"
                        autoSize={{ minRows: 1, maxRows: 4 }}
                    />
                </Form.Item>

                <Form.Item
                    label="Город получения"
                    name="DistCity"
                    rules={[
                        {
                            required: true,
                            message: 'Введите город получения',
                        },
                    ]}
                >
                    <TextArea
                        placeholder="Пушкин"
                        autoSize={{ minRows: 1, maxRows: 2 }}
                    />
                </Form.Item>

                <Form.Item
                    label="Адрес получения"
                    name="DistAddress"
                    rules={[
                        {
                            required: true,
                            message: 'Введите адрес получения',
                        },
                    ]}
                >
                    <TextArea
                        placeholder="Садовая ул., 7"
                        autoSize={{ minRows: 1, maxRows: 4 }}
                    />
                </Form.Item>

                <Form.Item
                    label="Вес груза, г"
                    name="Weight"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 30,
                    }}
                    rules={[
                        {
                            required: true,
                            message: 'Введите вес груза'
                        },
                    ]}
                >
                    <InputNumber
                        placeholder="1000"
                        autoSize={{ minRows: 1, maxRows: 6 }}
                    />
                </Form.Item>

                <Form.Item
                    label="Дата оформления"
                    name="Date"
                    rules={[
                        {
                            required: true,
                            message: 'Введите дату оформления',
                        },
                    ]}
                >
                    <DatePicker locale={locale} format="DD.MM.YYYY"/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Заказать
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FormPage;