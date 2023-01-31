import { useState, useEffect } from "react";
import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { RemoveTodo } from "./RemoveTodo";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

export const TodoView = () => {
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todo");
    const saveTodoList = JSON.parse(saveTodos);
    return saveTodoList || [];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  //完了・未完了操作（チェック機能）
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  return (
    <>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h2" component="h2">
              Todo List
            </Typography>
            <AddTodo setTodos={setTodos}/>
            <Box sx={{ mt: 3 }}>
              残りのタスク:{todos.filter((todo) => !todo.completed).length}
            </Box>
          </CardContent>
        </Card>
      </Stack>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="task table">
          <TableHead>
            <TableRow>
              <TableCell>チェック</TableCell>
              <TableCell>タスク</TableCell>
              <TableCell>期日</TableCell>
              <TableCell>備考</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </TableBody>
        </Table>
      </TableContainer>
      <RemoveTodo todos={todos} setTodos={setTodos}/>
    </>
  );
};
