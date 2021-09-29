import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Modal } from 'antd'
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
        if (isNaN(values.yearPublished)) {Modal.error({content: 'Year of publication must be a number',})}
        else if (Object.values(values).some(el => el === '')) {Modal.error({content: 'Must fill out all the fields',})}
        else if (Object.values(values).some(el => el.length > 100)) {Modal.error({content: 'None of the fields can be more than 100 characters long',})}
        else if (props.currentId === 0) {
            props.createBookInstance(values, () => 
                {Modal.success({
                    content: 'Successfully added a book!',
                })})
            props.setCurrentId(0)
            setValues(initialFieldValues)  
        }
        else {
            props.updateBookInstance(props.currentId, values, () => 
                Modal.success({
                    content: 'Successfully edited the book info!',
                }))
            props.setCurrentId(0)
            setValues(initialFieldValues)
            }
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
                span: 8,
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
                    {
                    max: 100,
                    message: 'Too many characters used!',
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
                    {
                    max: 100,
                    message: 'Too many characters used!',
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
                    {
                    max: 100,
                    message: 'Too many characters used!',
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
                    {
                    max: 100,
                    message: 'Too many characters used!',
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
                    {
                    max: 100,
                    message: 'Too many characters used!',
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
                    {
                    max: 100,
                    message: 'Too many characters used!',
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