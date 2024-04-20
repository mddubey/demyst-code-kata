const { todoRestClient } = require("../src/todo-rest-client");
const { todoService } = require("../src/todo-service");


jest.mock("../src/todo-rest-client");
afterEach(() => {
    jest.clearAllMocks();
});

describe('fetchToDos', () => {
  it('should fetch todo#2 and todo#4 with their title and completion status', async () => {    
    const todo2 = {"userId": 2, "id": 2, "title": "First Title", "completed": false};
    const todo4 = {"userId": 4, "id": 4, "title": "Second Title", "completed": true};    
    const expectedTodos = [{title: "First Title", completed: false}, {title: "Second Title", completed: true}];

    todoRestClient.fetchToDo
        .mockImplementationOnce(() => Promise.resolve(todo2))
        .mockImplementationOnce(() => Promise.resolve(todo4));
    
    await expect(todoService.fetchToDos(2)).resolves.toEqual(expectedTodos);    

    expect(todoRestClient.fetchToDo).toHaveBeenCalledWith(2);
    expect(todoRestClient.fetchToDo).toHaveBeenCalledWith(4);        
  });

  it('should not fetch any todos if the limit is 0', async () => {    
    const expectedTodos = [];

    await expect(todoService.fetchToDos(0)).resolves.toEqual(expectedTodos);    

    expect(todoRestClient.fetchToDo).not.toHaveBeenCalled();    
  });

  it('should not fetch any todos if the limit is negative', async () => {    
    const expectedTodos = [];

    await expect(todoService.fetchToDos(-10)).resolves.toEqual(expectedTodos);    

    expect(todoRestClient.fetchToDo).not.toHaveBeenCalled();    
  });

  it('should give error when there is error while fetching one of the ToDos', async () => {    
    const todo2 = {"userId": 2, "id": 2, "title": "First Title", "completed": false};    

    todoRestClient.fetchToDo
        .mockImplementationOnce(() => Promise.resolve(todo2))
        .mockImplementationOnce(() => Promise.reject(new Error("No Todo Found"))); //Error
    
    await expect(todoService.fetchToDos(2)).rejects.toThrow("Error while fetching Todos!");

    expect(todoRestClient.fetchToDo).toHaveBeenCalledWith(2);
    expect(todoRestClient.fetchToDo).toHaveBeenCalledWith(4);        
  });

});