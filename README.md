# Would You Rather Project

To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start` or `yarn start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions
    │    ├── authedUser.js # authenticated user actions.
    │    ├── questions.js # questions actions .
    │    ├── shared.js # shared actions .
    │    └── users.js # users actions.
    │    
    ├── Component
    │    ├── App.js # This is the root of your app
    │    ├── Dashboard.js # used to render all answered questions and un answered questions.
    │    ├── Leader.js # render user score and count of questions and answers
    │    ├── LeaderBoard.js # render collection of Leader component.
    │    ├── Nav.js # navigation bar to navigate to any page in the application.
    │    ├── NewQuestion.js # create new question.
    │    ├── NotFound.js # 404 page if the requested page doesn't exist
    |    ├── Option.js # render option info.
    │    ├── QuestionAnswered.js # UI for the question that answered before.
    │    ├── QuestionDashboard.js # UI for the dashboard question .
    │    ├── QuestionPage.js # question page that ender QuestionAnswered UI or QuestionUnAnswered UI
    |    ├── QuestionUnAnswered.js # UI for the question that still unanswered. 
    │    └── SignInPage.js # select the user to sign in
    ├── images # contain Users images
    |
    ├── middleware
    │    ├── index.js # to applay the required middlewares as thunk ,logger
    │    ├── logger.js # logger middleware
    |
    ├── reducers #coatin all info that will saved in ths store
    │    ├── authedUser.js # authenticated user reducer.
    │    ├── questions.js # questions reducer .
    │    ├── index.js # combine all reducers .
    │    └── users.js # users reducer.
    |
    ├── utils 
    │    ├── _Data.js # act as local database file.
    │    ├── api.js # act as backend to access the database..
    │    └── helpers.js # contain helper methods like formateQuestion.
    |
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
