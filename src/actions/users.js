export const RECEIVE_USERS='RECEIVE_USERS'
export const USER_CREATE_QUESTION='USER_CREATE_QUESTION'

export const receiveUsers=(users)=>{
    return {
        type:RECEIVE_USERS,
        users

    }
}

export const userCreateQuestion=(authedUser,questionId)=>{
    return {
        type:USER_CREATE_QUESTION,
        authedUser,
        id:questionId



    }
}