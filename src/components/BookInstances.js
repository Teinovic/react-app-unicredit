import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/bookInstance'


const BookInstances = (props) => {
    useEffect(() => {
        props.fetchAllBookInstances()
    }, [])

    console.log(props.bookInstanceList)
    return (
        <div>
            {
                props.bookInstanceList.map((record, index) => {
                    return (
                    <div key={index}>
                        <p>{record.bookName}</p>
                        <p>{record.authorName}</p>
                    </div>
                    )
            })
            }
        </div>
    )
}

const mapStateToProps = state => ({
    bookInstanceList: state.bookInstance.list
})

const mapActionToProps = {
    fetchAllBookInstances: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)((BookInstances));