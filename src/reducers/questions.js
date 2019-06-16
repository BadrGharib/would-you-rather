import {RECEIVE_QUESTIONS,ADD_QUESTION} from '../actions/questions'

export default function questions(state={},action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
        debugger;
          return {
              ...state,
              ...action.questions
          }
          case ADD_QUESTION:
          debugger;
           return {
                ...state,
                [action.question.id]: action.question
           }
        default:
        return state  
    }
}

