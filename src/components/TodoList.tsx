import React from 'react';
import { Todo } from '../types/Todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  tempTodo: Todo | null;
  loading: boolean;
  handleDelete: (id: number) => void;
  setError: (error: string | null) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  tempTodo,
  loading,
  handleDelete,
}) => (
  <section className="todoapp__main" data-cy="TodoList">
    {loading ? (
      <div className="loader">Loading...</div>
    ) : (
      todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          tempTodo={tempTodo}
        />
      ))
    )}
    {tempTodo && (
      <div className="todo todo--temp" data-cy="TempTodo">
        <span className="todo__title">{tempTodo.title}</span>
        <div className="loader" />
      </div>
    )}
  </section>
);

export default TodoList;
