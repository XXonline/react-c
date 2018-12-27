// 'React' must be in scope when using JSX  react/react-in-jsx-scope
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

ReactDOM.render(<TodoList/>, document.getElementById('root'));
