import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/bookInstance'
import { Table, Space } from 'antd'
import 'antd/dist/antd.css';
import BookInstanceForm from './BookInstanceForm';

const BookInstances = (props) => {
    
    const [currentId, setCurrentId] = useState(0)
    const [rerender, toggleRerender] = useState(false)
    
    useEffect( () => {
         props.fetchAllBookInstances()
    }, [currentId])

    console.log(props.bookInstanceList)
    
    const dataSource = Object.entries(props.bookInstanceList).flat().filter(element => isNaN(element))

    console.log(dataSource, 'luca')

    const onDelete = id => {
      if(window.confirm('Are you sure you want to delete this book?')) {
        props.deleteBookInstance(id, () => {window.alert('deleted')})
      }
      toggleRerender(!rerender)
    }

    const columns = [
        {
          title: 'bookName',
          dataIndex: 'bookName',
          key: 'bookName',
        },
        {
          title: 'authorName',
          dataIndex: 'authorName',
          key: 'authorName',
        },
        {
          title: 'genre',
          dataIndex: 'genre',
          key: 'genre',
        },
        {
          title: 'publisher',
          dataIndex: 'publisher',
          key: 'publisher',
        },
        {
          title: 'shortDescription',
          dataIndex: 'shortDescription',
          key: 'shortDescription',
        },
        {
          title: 'yearPublished',
          dataIndex: 'yearPublished',
          key: 'yearPublished',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => { 
            return (
              <Space size="middle">
                <a onClick={() => {setCurrentId(record.id)}}>Update</a>
                <a onClick={() => {onDelete(record.id)}}>Delete</a>
              </Space>
          
            )
          }
        }
      ];

    return (
      <>
        <Table dataSource={dataSource} columns={columns} />
        <BookInstanceForm {...({currentId, setCurrentId})}/>
      </>
    )
}

const mapStateToProps = state => ({
    bookInstanceList: state.bookInstance.list
})

const mapActionToProps = {
    fetchAllBookInstances: actions.fetchAll,
    deleteBookInstance: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)((BookInstances));