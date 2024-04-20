const axios = require('axios');
const { todoRestClient } = require("../src/todo-rest-client");

jest.mock('axios');

describe('fetchToDo', () => {
  it('fetches successfully todo by given Id', async () => {
    const response = {
      data: {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(response));

    await expect(todoRestClient.fetchToDo(1)).resolves.toEqual(response.data);
    expect(axios.get).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos/1");
  });

  it('fetches erroneously data from', async () => {
    const errorMessage = 'ToDo Not Found';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(todoRestClient.fetchToDo(5)).rejects.toThrow(errorMessage);
  });
});