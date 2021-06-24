import axios from 'axios';

const TODO_API_BASE_URL = "http://localhost:8081/todo/";
class TodoService {

    async createTodo(TodoItem, callback) {
        await axios.post(TODO_API_BASE_URL, TodoItem);
        callback();
    }

    // updateTodo(id, TodoItem) {
    //     return axios.put(TODO_API_BASE_URL, TodoItem);
    // } 수정 버튼이 없음

    updateTodoComp(id, iscompleted) {
        let completed = (iscompleted === true? "complete" : "incomplete");
        return axios.patch(TODO_API_BASE_URL + id + "/" + completed);
    }

    deleteTodo(id) {
        return axios.delete(TODO_API_BASE_URL + id);
    }
    //deleteTodo() 전체 삭제 버튼 없음
    //findTodo() 아직 필요없는 기능

    getTodos() {
        return axios.get(TODO_API_BASE_URL);
    }



}

export default new TodoService();
