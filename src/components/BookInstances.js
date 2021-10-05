import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as apiActions from '../actions/bookInstance'
import { Table, Space, Modal } from 'antd'
import 'antd/dist/antd.css'
import BookInstanceForm from './BookInstanceForm'
import { updateCurrentId } from '../actions/currentId'

const BookInstances = (props) => {
  
    const [forceRerender, setForceRerender] = useState(0)
    const { confirm } = Modal
    
    useEffect( () => {
         props.fetchAllBookInstances()
    }, [props.currentId, forceRerender])

    console.log(props.bookInstanceList)
    
    const dataSource = Object.entries(props.bookInstanceList).flat().filter(element => isNaN(element))


    function onDelete(id) {
       confirm({
        title: 'Are you sure delete this book?',
        content: 'This will permanently delete all the book info.',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        async onOk() {
          await props.deleteBookInstance(id, () => {
            Modal.success({
              content: 'Successfully deleted the book.'
            })
            setForceRerender(forceRerender + 1)
            }
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
                <a onClick={() => {props.updateCurrentId(record.id)}}>Update</a>
                <a onClick={() => {onDelete(record.id)}}>Delete</a>
              </Space>
          
            )
          }
        }
      ]

    return (
      <>
        <Table dataSource={dataSource} columns={columns} />
        <BookInstanceForm />
      </>
    )
}

const mapStateToProps = state => ({
    bookInstanceList: state.bookInstance.list,
    currentId: state.currentId
})

const mapActionToProps = {
    fetchAllBookInstances: apiActions.fetchAll,
    deleteBookInstance: apiActions.Delete,
    updateCurrentId
}

export default connect(mapStateToProps, mapActionToProps)((BookInstances));