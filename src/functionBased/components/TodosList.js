/* eslint-disable react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prefer-stateless-function
class TodosList extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const {
      todos, handleChangeProps, deleteTodoProps, setUpdateProps,
    } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdateProps={setUpdateProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
