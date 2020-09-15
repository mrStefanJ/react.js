import {GET_USERS} from '../types'

const initalState = {
    users: [],
    loading: true
}

export default function(state = initalState, action) {
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users:action.payload,
                loading: false
            }
            default: return state
    }
}