# NickSays

[NickSays](https://nick-says.netlify.app/)

NickSays is a simple, yet challenging memory game.

## Description

The game is designed as a 3x3 grid. The user initiates the game by clicking the Start button. Each game starts on round 1, and each round Nick will ask the user a randomly generated question. The question length is based upon what round the user is on. The squares will light up, and after the user will be tasked to replicate the question by clicking on the corresponding squares. If the user is able to give the correct answer, they will move on to the next round, where the question length is incremented by 1. One wrong move, and it's all over. Click wisely.

## Scope of functionalities

Our bets page leverages a live sports API which provides statistics across all teams including but not limited to: Scores, Records, Schedules, Logos, Team Colors, Odds and Location. After logging in, users are able to place their wagers through our Bets page which feeds into our database. The odds are updated every 3 minutes to ensure users have the most up to date and accurate information. Bets are only allowed to be placed on games that are not in progress. Users are also able to check their historical performance and track their progress as the games finish.

## Technologies and Dependencies

[Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), [Express](https://expressjs.com/), [EJS](https://ejs.co/), [MongoDB](https://www.mongodb.com/), [Passport](http://www.passportjs.org/), [Google OAuth 2.0](http://www.passportjs.org/packages/passport-google-oauth20/), [dotenv](https://www.npmjs.com/package/dotenv), [Mocha](https://mochajs.org/).

## Running locally

In order to run this game on your local machine, clone this repository and run the following commands:

```
$ npm install
$ npm run start
```

## Status

Website is deployed to Netlify and running stable.

## Contributors

[Nick Ochs](https://github.com/n-ochs),

## Future updates

We are working to add a new "continuous" game mode, where the questions are no longer generated each round, but rather they build on top of the previous round. We are also working on integrating keystrokes, so that the user will have the option of clicking the buttons with their mouse or using their keyboard. Stay tuned.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.