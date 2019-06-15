export function formatQuestion (question, author, authedUser) {
    const { id, optionOne, optionTwo} = question
    const { name, avatarURL } = author
  
    return {
      name,
      id,
      avatar: avatarURL,
      optionSelected:authedUser.answers[id]||null,
      optionOne: optionOne.text,
      optionTwo: optionTwo.text,
      optionOneVotes: optionOne.votes.length,
      optionTwoVotes: optionTwo.votes.length,
      
    }
  }