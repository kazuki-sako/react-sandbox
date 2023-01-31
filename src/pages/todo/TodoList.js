import React from 'react';
import { Todo } from './Todo';

//map関数
//配列の中を1つ1つ取り出す関数
//下記の例でいくと、todosに格納されている配列を取り出している
// return todos.map((todo) => <Todo />);

//keyを設定するときはユニークなものを
//return todos.map((todo) => <Todo todo={todo} key={todo} />);

export const TodoList = ({ todos, toggleTodo }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>);
}