import {USER_SIGN_IN , USER_SIGN_OUT} from '../actions/authedUser'

export default function authedUser(state=null,action){
    switch(action.type){
        case USER_SIGN_IN:
          return action.id
        case USER_SIGN_OUT:
          return null
        default:
          return state  
    }
}

