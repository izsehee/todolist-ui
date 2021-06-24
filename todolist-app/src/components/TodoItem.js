import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.completed !== nextProps.completed;
    // }
    
    render() {
        const { id, item, completed, onToggle, onRemove } = this.props;
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${completed && 'checked'}`}>
                    <div>{item}</div>
                </div>
                
                {
                    completed && (<div className="check-mark">✓</div>)
                }
            </div>

        );
    }
}

export default TodoItem;