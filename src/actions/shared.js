import {getInitialData} from '../utils/api'
import {receiveQuestions} from './questions'
import {receiveUsers}  from './users'
import { signIn} from './authedUser'
import {showLoading , hideLoading} from 'react-redux-loading'

export const handelInitialDate=()=>{
    return (dispatch,getState)=>{
            debugger;
            dispatch(showLoading())
            const {authedUser}=getState();
            return getInitialData()
                    .then(({users,questions})=>{
                            authedUser!==null && dispatch(signIn(authedUser))
                            dispatch(receiveUsers(users))
                            dispatch(receiveQuestions(questions))
                            dispatch(hideLoading())
                         })
    }
}