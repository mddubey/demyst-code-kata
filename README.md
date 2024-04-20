# Exercise

# How to Run

## Local Machine
### Prerequisite
* Node 18 or greater
### Install the dependencies
* npm install
### Run the tests
* npm test
### Get 20 even ToDos
* node src/todo-dashboard.js
### Get 5 even ToDos
* node src/todo-dashboard.js 5
### Get 5 even ToDos (using npm bin script)
* node . 5

## Using Docker
### Prerequisite
* Docker or Colima started
### Build docker image and Start a container
* docker build -t todo-dashboard . && docker run -itd --name todo-dashboard todo-dashboard
This will take sometime to build.
### Run the tests
* docker exec -it todo-dashboard sh -c "npm test"
### Get 20 even ToDos
* docker exec -it todo-dashboard sh -c "node src/todo-dashboard.js"
### Get 5 even ToDos
* docker exec -it todo-dashboard sh -c "node src/todo-dashboard.js 5"
### Get 5 even ToDos (using npm bin script)
* docker exec -it todo-dashboard sh -c  "node . 5"
### Install as global cli package
* docker exec -it todo-dashboard sh -c  "npm install -g ."
### Run as global cli, fetch 20 todos
* docker exec -it todo-dashboard sh -c  "todo-dashboard"
### Run as global cli, fetch 5 todos
* docker exec -it todo-dashboard sh -c  "todo-dashboard 5"
### Cleanup 
* docker stop todo-dashboard && docker rm todo-dashboard && docker image rm todo-dashboard

The goal of the project is to build a command line tool.

Using Go, write a command line tool that consumes the first `20` `even` numbered TODO's in most performant way and output the `title` and whether it is `completed` or not.

- TODO at index 1 can be accessed at: <https://jsonplaceholder.typicode.com/todos/1>

- TODO at index 2 can be accessed at: <https://jsonplaceholder.typicode.com/todos/2>

Ensure you are submitting the code along with cli.

## Judging Criteria

- Engineering principles & standards
- System extensibility & Scalability
- Test coverage
- Brevity and Simplicity

## Bonus Points

- Docker

## FAQ

### What is the time-limit on exercise ?

There is none, ensure you submit your best attempt and as soon as you possibly can.

### How to submit ?

Submit a GitHub / Bitbucket repo for review. No ZIP files!

### Do I need to write tests for connecting to API ?

That can be ommitted.
