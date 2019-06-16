import { saveQuestionAnswer, saveQuestion,} from '../utils/api'
import{showLoading,hideLoading} from 'react-redux-loading'
import { receiveUsers , userCreateQuestion} from './users';

export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const ADD_QUESTION='ADD_QUESTION'
export const VOTE_QUESTION='VOTE_QUESTION'

export const receiveQuestions=(questions)=>{
    return {
        type:RECEIVE_QUESTIONS,
        questions
    }
}

export const addQuestion=(question)=>{
    return {
        type:ADD_QUESTION,
        question
    }
}

// export const voteQuestion=(qId,user,answer)=>{
//     return {
//         type:VOTE_QUESTION,
//         qId,
//         user,
//         answer
//     }
// }

export const handelVoteQuestion=(id,option)=>{
    debugger;
    return (dispatch, getState)=>{
        const {authedUser}=getState()
        dispatch(showLoading())
        return saveQuestionAnswer({
            authedUser,
            qid:id,
            answer:option})
            .then((result)=>{
                debugger;
                const{questions,users}=result
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                dispatch(hideLoading())
            }
            )
            
    }
}

export const handelAddQuestion=(optionOneText, optionTwoText, author )=>{
    debugger;
    return (dispatch, getState)=>{
        const {authedUser}=getState()
        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author})
            .then((question)=>{
                debugger;
                dispatch(addQuestion(question))
                dispatch(userCreateQuestion(question.author,question.id))
                dispatch(hideLoading())
            }
            )
            
    }
}

