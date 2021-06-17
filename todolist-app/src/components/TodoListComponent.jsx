import React, { Component } from 'react';
import TodoService from '../service/TodoService';

/**
 * 
 */
class TodoListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        TodoService.getTodos().then((res) => {
            this.setState({ todos: res.data});
            console.log(this.state);
        });
        
    }

    render() {
        return (
        <div>
            <h2 className="text-center">Todo List</h2>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>할 일</th>
                            <th>완료여부</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map(
                            todo =>
                            <tr key = {todo.id}>
                                <td> {todo.item} </td>
                                <td> {String(todo.completed)} </td>
                                <td> {todo.user}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>);
    }
}
export default TodoListComponent;