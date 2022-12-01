# Quarterly rewards statement project
This is Quarterly reward points statement application for customer transactions. It displays a data table which shows the reward points earned for each customer per month and the total during a three month period.

CREDITS: This project built by leveraging the standard create-react-app set-up


### `Live Demo`
![alt text](https://github.com/hboddu/rewards/blob/main/rewards-demo.gif?raw=true)


## The project solves the below problem/assignment asked by the client
A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.\
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).\
Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

Use React JS (do not use TypeScript)\
Simulate an asynchronous API call to fetch data\
Make up a data set to best demonstrate your solution\
Check solution into GitHub

## Architecture / Design
This application uses client side rendering leveraging the below technologies

`CLIENT` : ReactJS (Javascript), React Hooks, Material UI, Apollo GraphQL client, Jest\
`SERVER` : JSON GraphQL Server (For retrieving the mock data)\
`DATABASE` : Mock db.json

## Instructions to setup and run this project

### `git clone https://github.com/hboddu/rewards.git`
Clone the repo on your local machine using git clone command

### `yarn install`
Installs all the packages and dependencies needed for this project

### `yarn server-start`
Runs the json grapql server on port 8000 in development mode, where you can access the customer transactions list graphql API endpoint 

### `yarn client-start`

Runs the front end  in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `yarn lint`

Runs the eslint and shows errors on the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
 Press a to run all tests

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
This app is ready to be deployed!