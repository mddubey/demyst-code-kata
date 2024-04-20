const { todoRestClient } = require("./todo-rest-client");

todoRestClient.fetchToDo(1)
    .then((todo => console.log(todo)));

console.log("todo-dashboard");