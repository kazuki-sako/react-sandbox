import React from "react";
import { Checkbox, TableCell, TableRow } from "@mui/material";

export const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <Checkbox
          checked={todo.completed}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          readOnly
          onChange={handleTodoClick}
        />
      </TableCell>
      <TableCell>{todo.name}</TableCell>
      <TableCell>{todo.day}</TableCell>
      <TableCell>{todo.remarks}</TableCell>
    </TableRow>
  );
};
