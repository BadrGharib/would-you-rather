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
        type:addQuestion,
        question
    }
}

export const VoteQuestion=(qId,user,answer)=>{
    return {
        type:VOTE_QUESTION,
        qId,
        user,
        answer
    }
}