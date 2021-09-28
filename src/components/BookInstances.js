import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/bookInstance'
import { Table, Space, Modal } from 'antd'
import 'antd/dist/antd.css'
import BookInstanceForm from './BookInstanceForm'

const BookInstances = (props) => {
    
    const [currentId, setCurrentId] = useState(0)
    const [forceRerender, setForceRerender] = useState(0)
    const { confirm } = Modal
    
    useEffect( () => {
         props.fetchAllBookInstances()
    }, [currentId, forceRerender])

    console.log(props.bookInstanceList)
    
    const dataSource = Object.entries(props.bookInstanceList).flat().filter(element => isNaN(element))


    function onDelete(id) {
       confirm({
        title: 'Are you sure delete this book?',
        content: 'This will permanently delete all the book info.',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          props.deleteBookInstance(id, () => 
            Modal.success({
              content: 'Successfully deleted the book.',
            }).then(setForceRerender(forceRerender + 1))
          )
          
        },
        onCancel() {
          console.log('Cancel');
        },
      });
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
      ]

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