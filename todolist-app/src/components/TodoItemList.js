import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.todos !== nextProps.todos;
    // }
    
    render() {
        const { todos, onRemove, onToggle } = this.props;
        const todoList = todos.map(
            ({id, item, completed}) => (
                <TodoItem
                    id={id}
                    item={item}
                    completed={completed}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}
export default TodoItemList;