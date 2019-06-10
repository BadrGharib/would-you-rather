export const USER_SIGN_IN='USER_SIGN_IN'
export const USER_SIGN_OUT='USER_SIGN_OUT'

export const signIn=(id)=>{
    return {
        type:USER_SIGN_IN,
        id,

    }

}

export const signOut=()=>{
    return {
        type:USER_SIGN_OUT,

    }

}