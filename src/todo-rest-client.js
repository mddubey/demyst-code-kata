const axios = require('axios');

const todoRestClient = {}
todoRestClient.fetchToDo = async(todoId) => {
    const todoURL = `https://jsonplaceholder.typicode.com/todos/${todoId}`;    
    return await axios.get(todoURL)
        .then((response)=> response.data);                
};

module.exports = {todoRestClient}; 
