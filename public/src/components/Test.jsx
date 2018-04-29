import React from 'react';
import { SortableItem, swapArrayPositions } from 'react-sort-list';

let todos = [
    {id: 1, title: "Task 1"},
    {id: 2, title: "Task 2"},
    {id: 3, title: "Task 3"}
]

class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            todos
        }
        this.swap = this.swap.bind(this);
    }
    swap(dragIndex, dropIndex) {
        let swappedTodo = swapArrayPositions(this.state.todos, dragIndex, dropIndex);
        this.setState({
            todos: swappedTodo
        })
    }
    render() {
        return (
            <ul>
                {todos.map(function (todo, index) {
                    return (
                        <SortableItem items={todos} id={todo.id} key={todo.id} swap={this.swap} >
                            <li> {todo.title} </li>
                        </SortableItem>
                    )
                }.bind(this))}
            </ul>
        )
    }
}

export default Test;