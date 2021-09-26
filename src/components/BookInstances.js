import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/bookInstance'
import { Table } from 'antd'
import 'antd/dist/antd.css';

const BookInstances = (props) => {

    useEffect( () => {
         props.fetchAllBookInstances()
    }, [])

    const dataSource = Object.entries(props.bookInstanceList).flat().filter(element => element !== '0')

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
        }
      ];

    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}

const mapStateToProps = state => ({
    bookInstanceList: state.bookInstance.list
})

const mapActionToProps = {
    fetchAllBookInstances: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)((BookInstances));