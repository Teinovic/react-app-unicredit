import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import 'antd/dist/antd.css';

const initialFieldValues = {
    bookName: '',
    authorName: '',
    genre: '',
    publisher: '',
    shortDescription: '',
    yearPublished: ''
}

export default function BookInstanceForm() {
    
    const [values, setValues] = useState(initialFieldValues)
    
    const handleInputChange = e => {
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        })
    }
    console.log(values)

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Book Title"
                name="bookName"
                rules={[
                    {
                    required: true,
                    message: 'Please input the book title!',
                    },
                ]}
            >
                <Input 
                    name="bookName"
                    value={values.bookName}
                    onChange={handleInputChange}
                />
            </Form.Item>
    
            <Form.Item
                label="Author"
                name="authorName"
                rules={[
                    {
                    required: true,
                    message: "Please input the author's name!",
                    },
                ]}
            >
                <Input 
                    name="authorName"
                    value={values.authorName}
                    onChange={handleInputChange}
                />
            </Form.Item>
    
            <Form.Item
                label="Genre"
                name="genre"
                rules={[
                    {
                    required: true,
                    message: 'Please input the genre of the book!',
                    },
                ]}
            >
                <Input 
                    name="genre"
                    value={values.genre}
                    onChange={handleInputChange}
                />
            </Form.Item>

            <Form.Item
                label="Publisher"
                name="publisher"
                rules={[
                    {
                    required: true,
                    message: 'Please input the publisher of the book!',
                    },
                ]}
            >
                <Input 
                    name="publisher"
                    value={values.publisher}
                    onChange={handleInputChange}
                />
            </Form.Item>

            <Form.Item
                label="Short Description"
                name="shortDescription"
                rules={[
                    {
                    required: true,
                    message: 'Please input the short description of the book!',
                    },
                ]}
            >
                <Input 
                    name="shortDescription"
                    value={values.shortDescription}
                    onChange={handleInputChange}
                />
            </Form.Item>

            <Form.Item
                label="Year of publication"
                name="yearPublished"
                rules={[
                    {
                    required: true,
                    message: 'Please input the year of publication!',
                    },
                ]}
            >
                <Input 
                    name="yearPublished"
                    value={values.yearPublished}
                    onChange={handleInputChange}
                />
            </Form.Item>
    
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        );
}
