export function formatQuestion (question, author, authedUser) {
    const { id, optionOne, optionTwo} = question
    const { name, avatarURL } = author
    debugger;
    return {
      name,
      id,
      avatar: avatarURL,
      optionSelected:authedUser.answers[id]||null,
      optionOneText: optionOne.text,
      optionTwoText: optionTwo.text,
      optionOneVotesCount: optionOne.votes.length,
      optionTwoVotesCount: optionTwo.votes.length,
      
    }
  }