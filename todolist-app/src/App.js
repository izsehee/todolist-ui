import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import TodoService from './service/TodoService';
import { placeholder } from '@babel/types';

class App extends Component {

  state = {
    input:'',
    todos: []
  }

  componentDidMount() {
    TodoService.getTodos().then((res)=> {
      this.setState({
        todos : res.data
      });
    })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  setData(t) {
    this.setState({
      input: '',
      todos: t
    });
  }

  handleCreate = () => {
    const { input } = this.state;
    TodoService.createTodo({
      item : input,
      completed : false
    }, ()=>{
      TodoService.getTodos().then((res) => {
        this.setState({
          input : '',
          todos: res.data
        })
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      completed: !selected.completed
    };

    this.setState({
      todos: nextTodos
    });
    TodoService.updateTodoComp(id, nextTodos[index].completed);
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
    TodoService.deleteTodo(id);
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    return (
      <div>
        <TodoTemplate 
        form={(
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}/>)}>
        <TodoItemList
          todos={todos}
          onRemove={handleRemove}
          onToggle={handleToggle}/>
        </TodoTemplate>
      </div>
    );
  }
}

export default App;
