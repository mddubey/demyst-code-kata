const { todoService } = require("./todo-service");

console.log("todo-dashboard");
todoService.fetchToDos(20)
    .then((todos) => console.log(todos))
    .catch((error) => console.log("Error while fetching TODOs"));