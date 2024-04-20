const { todoService } = require("./todo-service");

const limit = parseInt(process.argv[0]) || 20
console.log("todo-dashboard");
console.log(`Fetching top ${limit} matching todos...`);
todoService.fetchToDos(limit)
    .then((todos) => console.table(todos))
    .catch((error) => console.log("Error while fetching TODOs"));