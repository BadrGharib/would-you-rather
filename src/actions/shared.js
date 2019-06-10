import {getInitialData} from '../utils/api'
import {receiveQuestions} from './questions'
import {receiveUsers}  from './users'
import { signIn} from './authedUser'
import {showLoading , hideLoading} from 'react-redux-loading'
export const handelInitialDate=()=>{
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users,questions})=>{
          //  dispatch(signIn('johndoe'))
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}