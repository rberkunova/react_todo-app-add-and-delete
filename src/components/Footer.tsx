import React from 'react';
import { Todo } from '../types/Todo';

interface FooterProps {
  activeCount: number;
  filter: string;
  setFilter: (filter: string) => void;
  handleDeleteCompletedTodos: () => void;
  todos: Todo[];
}

const Footer: React.FC<FooterProps> = ({
  activeCount,
  filter,
  setFilter,
  handleDeleteCompletedTodos,
  todos,
}) => (
  <footer className="todoapp__footer" data-cy="Footer">
    <span className="todo-count" data-cy="TodosCounter">
      {`${activeCount} items left`}
    </span>
    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={`filter__link ${filter === 'all' ? 'selected' : ''}`}
        data-cy="FilterLinkAll"
        onClick={() => setFilter('all')}
      >
        All
      </a>
      <a
        href="#/active"
        className={`filter__link ${filter === 'active' ? 'selected' : ''}`}
        data-cy="FilterLinkActive"
        onClick={() => setFilter('active')}
      >
        Active
      </a>
      <a
        href="#/completed"
        className={`filter__link ${filter === 'completed' ? 'selected' : ''}`}
        data-cy="FilterLinkCompleted"
        onClick={() => setFilter('completed')}
      >
        Completed
      </a>
    </nav>
    <button
      type="button"
      className="todoapp__clear-completed"
      data-cy="ClearCompletedButton"
      disabled={todos.every(todo => !todo.completed)}
      onClick={handleDeleteCompletedTodos}
    >
      Clear completed
    </button>
  </footer>
);

export default Footer;
