import api from "./api";
import { Modal } from 'antd'

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

const formatData = data => ({
    ...data,
    yearPublished: parseInt(data.yearPublished ? data.yearPublished : 0)
})

export const fetchAll = () => dispatch => {
    api.bookInstance().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => err.message === 'Network Error' ? 
                Modal.error({content: `Error type: ${err.message}. The server appears to be down. Try again later.`}) : 
                Modal.error({content: `Error type: ${err.message}`})
        )
}

export const create = (data, onSuccess) => dispatch => {
    data = formatData(data)
    api.bookInstance().create(data).then(res => {
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload: res.data
        })
        onSuccess()
    })
    .catch(err => err.message === 'Network Error' ? 
                Modal.error({content: `Error type: ${err.message}. The server appears to be down. Try again later.`}) : 
                Modal.error({content: `Error type: ${err.message}`})
    )
}

export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data)
    api.bookInstance().update(id, data).then(res => {
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload: {id: id, ...data}
        })
        onSuccess()
    })
    .catch(err => err.message === 'Network Error' ? 
                Modal.error({content: `Error type: ${err.message}. The server appears to be down. Try again later.`}) : 
                Modal.error({content: `Error type: ${err.message}`})
    )
}

export const Delete = (id, onSuccess) => dispatch => {
    api.bookInstance().delete(id).then(res => {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        })
        onSuccess()
    })
    .catch(err => err.message === 'Network Error' ? 
                Modal.error({content: `Error type: ${err.message}. The server appears to be down. Try again later.`}) : 
                Modal.error({content: `Error type: ${err.message}`})
    )
}