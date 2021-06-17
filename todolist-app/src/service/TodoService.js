import axios from 'axios';

const TODO_API_BASE_URL = "http://localhost:8081/todo";
class TodoService {
    getTodos() {
        return axios.get(TODO_API_BASE_URL);
    }
}

export default new TodoService();
