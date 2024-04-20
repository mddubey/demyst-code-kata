const axios = require('axios');

const todoRestClient = {}
todoRestClient.fetchToDo = async(todoId) => {
    //can be taken in form of baseURL(from OS env) and path for configuration
    const todoURL = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    return await axios.get(todoURL)
        .then((response)=> response.data);                
};

module.exports = {todoRestClient}; 
