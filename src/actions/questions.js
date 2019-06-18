import {saveQuestionAnswer,saveQuestion} from '../utils/api'
import{showLoading,hideLoading} from 'react-redux-loading'
import {userVoteQuestion,userCreateQuestion} from './users';

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

export const voteQuestion=(qid,authedUser,answer)=>{
    return {
        type:VOTE_QUESTION,
        qid,
        authedUser,
        answer
    }
}

export const handelVoteQuestion=(id,option)=>{
    debugger;
    return (dispatch, getState)=>{
        const {authedUser}=getState()
        dispatch(showLoading())
        return saveQuestionAnswer({
            authedUser,
            qid:id,
            answer:option})
            .then(()=>{
                debugger;
                dispatch(voteQuestion(id,authedUser,option))
                dispatch(userVoteQuestion(id,authedUser,option))
                dispatch(hideLoading())
            })
    }
}

export const handelAddQuestion=(optionOneText, optionTwoText, author )=>{
    debugger;
    return (dispatch, getState)=>{
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

