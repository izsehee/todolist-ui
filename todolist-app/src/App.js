import React, { Component } from 'react';
import TodoTemplate from './components/TodoTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TodoListComponent from './components/TodoListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

class App extends Component {
  id = 3;
  state = {
    input:'',
    todos: [
      { id: 0, text: ' ㅎㅎㅎ', checked: false },
      { id: 1, text: ' ㅎㅎㅎ', checked: true },
      { id: 2, text: ' ㅎㅎㅎ', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
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
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
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
        <TodoTemplate form={(
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodoTemplate>
        {/* <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {TodoListComponent}></Route>
                <Route path = "/todo" component = {TodoListComponent}></Route>
              </Switch>
            </div>
          <FooterComponent/>
        </Router> */}
      </div>
    );
  }
}

export default App;
