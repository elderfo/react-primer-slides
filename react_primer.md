# React Primer

# What is React?

- A declarative, efficient, and flexible JavaScript library for building user interfaces.
- Component based

# Why React?

- Fast and purely client side (moving load off of servers)
- It's just JavaScript and HTML
- It can consistently maintain state
- Build resuable components
- Testable (jest, mocha, etc..)
- Designed for 'Learn once, build anywhere'
  - React Native
  - React VR
  - React Hardware (audrino, raspberry pi, etc...)

## ES6 or ECMAScript6 (aka ECMAScript 2015)

ECMAScript 6, also known as ECMAScript 2015, is the latest version of the ECMAScript standard. ES6 is a significant update to the language, and the first update to the language since ES5 was standardized in 2009. Implementation of these features in major JavaScript engines is underway now. ([https://github.com/lukehoban/es6features](https://github.com/lukehoban/es6features))

Not all current browsers support all features so ES6 code will have to be transpiled to ES5. The most common transpiler is `babel`. Fortuantely, we will not have to deal with this step.

- Arrow functions
- Scoped variables
- Classes
- Imports
- Destructuring

More information: [https://github.com/lukehoban/es6features](https://github.com/lukehoban/es6features)

# Environment Setup

## Install node

Node is a javascript runtime built on top of Chrome's V8 engine. It is lightweight, efficient and used worldwide in small to large scale applications. There is a very large and active community around it. While it's not required to host a React website, a lot of the tooling is node based.

`$ brew update && brew install node`

## Install yarn

Yarn is a node package manager built and maintained by Facebook and the open source community. Yarn was built as an alternative to the Node Package Manager (`npm`) to solve speed and dependency versioning issues in large scale applications.

`$ brew install yarn`

## Install create react app

`create-react-app` is a command line interface built and maintained by Facebook and the open source community. It is the easiest and fastest way to start a react application.

`$ yarn global install create-react-app`

## Setup an IDE

There are tons of IDEs available for creating React applications. Idea/WebStorm (along with many other JetBrains IDEs) have support. My personal preference is Visual Studio Code due to speed, superb node debugging abilities and a solid integrated terminal.

# Demo

## Create Project

Using `create-react-app` we will setup a project.

`$ create-react-app tcdi-todo`

## Project structure

- `node_modules` - Stores all of the node modules. When the React application is built using node, modules will be loaded from here
- `public` - Contains a boilerplate HTML file that React will attach to
- `src` - Contains the source for the project
- `project.json` - Contains the configuration of the project, including dependencies and scripts

## npm scripts

In the `package.json` file there are scripts, which are shortcuts to run scripts. Scripts can be executed by running `yarn run <script-name>` or `npm run <script-name>`.

- `yarn run start` - runs the react application in dev mode
- `yarn run build` - creates a production build of the application
- `yarn run test` - runs tests in watch mode
- `yarn run eject` - separates the app from the `create-react-app` ecosystem

## Run in dev mode

Start the application by running `yarn run start`. The application will be built and hosted using a local web server and a browser window will be opened.

# Build a Todo application

## Requirements

- To do items will have the following properties:
  - id - uuid - system generated 
  - title - string - name of the to do item
  - isCompleted - boolean - flag denoting whether the to do is completed
- Users should be able create, update, delete and toggle complete on todo items


