import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import * as actions from '../actions/bookInstance'


const initialFieldValues = {
    bookName: '',
    authorName: '',
    genre: '',
    publisher: '',
    shortDescription: '',
    yearPublished: ''
}

const BookInstanceForm = (props) => {
    const [form] = Form.useForm();
    const [values, setValues] = useState(initialFieldValues)
    
    const handleInputChange = e => {
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (props.currentId === 0) props.createBookInstance(values, () => {window.alert('inserted')})
        else props.updateBookInstance(props.currentId, values, () => {window.alert('updated')})
        form.resetFields()
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    

    useEffect(() => {
        if (props.currentId !== 0)
            setValues({
                ...props.bookInstanceList.find(element => element.id === props.currentId)
            })
            
    }, [props.currentId])

    // const handleInputChange = (e) => {
    //     const fname = e.target.name;
    //     const fvalue = e.target.value;
    //     form.setFieldsValue({
    //       [fname]: fvalue
    //     });
    //   }
    useEffect(() => {
        form.setFieldsValue({
            ...values
        });
    }, [values]);

    console.log(values)

    return (
        <Form
            form={form}
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            
            // onValuesChange={handleInputChange}
            initialValues={initialFieldValues}
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
                <Button 
                    type="primary" 
                    htmlType="submit"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
        );
}

const mapStateToProps = state => ({
    bookInstanceList: state.bookInstance.list
})

const mapActionToProps = {
    createBookInstance: actions.create,
    updateBookInstance: actions.update,
    deleteBookInstance: actions.Delete 
}

export default connect(mapStateToProps, mapActionToProps)((BookInstanceForm));