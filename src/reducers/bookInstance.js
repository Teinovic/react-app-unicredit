import { ACTION_TYPES } from '../actions/bookInstance'

const initialState = {
    list: []
}

export const bookInstance = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }  
        default:
            return state
    }
}