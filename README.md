![cf](https://i.imgur.com/7v5ASc8.png) 12: Express Middleware
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Create a PR to your master from your working branch.
* Ensure that your repository/branch is connected to travis-ci.com
* Ensure that your repository/branch is connected to a dyno at heroku.com
* Heroku and Travis should pick you up and deploy
* Submit on canvas:
  * a question and observation
  * how long you spent
  * link to your pull request
  * link to your build at travis-ci URL
  * Heroku Server URL

## Configuration 
Configure the root of your repository with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.env** - contains env variables (should be git ignored)
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **.travis.yml** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint (eslint **/*.js)
  * create a `test` script for running tests
  * create a `start` script for running your server
* **index.js** - the entry point for your application
* **src/** - contains your core application files and folders
* **src/app.js** - (or main.js) contains your core application bootstrap
* **src/lib/** - contains module definitions
* **\_\_test\_\_/** - contains unit tests

## Learning Objectives  
* students will be able to work with application, router, and 3rd party middleware through the use of express.js
* students will be able to implement custom middleware through the use of express.js
* students will be able to create custom routers for a specific resource

#### Feature Tasks
* create a single resource `express` API that can handle **GET**, **POST**, and **PUT** requests
* use the `http-errors` module to create new errors and associate them with a proper status code
* create an `error-middleware` module to handle errors and *use* it in your server file
* create a `model` module to handle dynamic models and *use* it in your server file
* create a `cors-middleware` module that will allow for public use of your API
* create the `deleteItem` and `availIDs` methods and add them to your `storage` module
  * these methods should be used to delete a resource (`deleteItem`) and return an array of id's from persisted resource filenames (`availIDs`)
* create the `updateNote`, `fetchNote`, and `fetchIDs` static methods as part of your `Note` model
* create a series of `note-route-tests` to test your **GET**, **POST**, and **PUT** routes
  * **hint:** *you'll want to use the `before` and `after` hooks provided by `mocha` in order to create a test note and delete the note after the test has completed*

