const { todoRestClient } = require("./todo-rest-client");

const findEvenTodoIDs = (limit) => {
    const evenTodoIds = [];
    let id = 1;    
    while(evenTodoIds.length < limit){        
        if(id % 2 == 0){
            evenTodoIds.push(id);
        }
        id++;
    }
    return evenTodoIds;
}

const todoService = {};
todoService.fetchToDos = async(limit) => {
    //A good idea could be to take a filter function instead of hardcoding to evenIds    
    const evenTodoIds = findEvenTodoIDs(limit);
    const todoPromises = evenTodoIds.map((todoId) => todoRestClient.fetchToDo(todoId));
    return Promise.all(todoPromises)
        .then((todoList) => 
            todoList.map((todoData) => ({"title": todoData.title, "completed": todoData.completed}))
        )
        .catch((err) => {
            console.error("Error while fetching Todos!", err);
            throw new Error("Error while fetching Todos!");        
        });    
};

module.exports = {todoService}; 
