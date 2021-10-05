import { combineReducers } from 'redux'
import { bookInstance } from './bookInstance'
import { currentId } from './currentId'

export const reducers = combineReducers({
    bookInstance,
    currentId
})