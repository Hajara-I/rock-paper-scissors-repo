# Rock Paper Scissors Game 

<img width="1276" alt="Screenshot 2022-03-15 at 00 11 15" src="https://user-images.githubusercontent.com/91130903/158281386-79c2d3cd-89ff-435f-b344-063a7228940e.png">


## About

The game allows the user to play against a 'computer' which responds to the user's selection by choosing between the three choices of 'rock', 'paper' or 'scissors'. Although I have previously made a game similar to this using vanilla javascript, I wanted to take the opportunity to build it in React JS in order to solidify my understanding of React.
The project primarily makes use of  the useState hook to manage the different states in the game like the user's choice, the computer's choice and the result's display. The project also make use of the useEffect hook to manage the re-rendering of the app based on a number of dependencies. Some aspects that proved challenging initially include the managing the state's between the user and the computer's choice and the `if else` loop which was rendering prematurely prior to incorporating the useEffect hook. 

<img width="1279" alt="Screenshot 2022-03-15 at 00 11 36" src="https://user-images.githubusercontent.com/91130903/158281443-de486907-fb59-461f-82ea-6112d174915d.png">


## Technologies
- React JS
- Javascript
- CSS

## Features
- User selects from a choice of three (rock, paper, scissors)
- Computer selects a random choice from either rock, paper, scissors
- A counter keeps count of the live score
- The first player to reach a score of 5 wins the game


## Getting Started
- Clone the repo `git clone https://github.com/Hajara-I/rock-paper-scissors-repo.git`
- Install NPM packages `npm install`
- Run start to view project in your localhost browser `npm run start`

## Live Site
- https://rock-paper-scissors-haj.netlify.app/

## Future Updates to Implement
- Allow users to login and add a username



