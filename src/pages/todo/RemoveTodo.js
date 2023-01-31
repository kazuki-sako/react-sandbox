import { Button, Box } from "@mui/material";

export const RemoveTodo = ({ todos, setTodos }) => {
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
    localStorage.removeItem(todos);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Button variant="contained" color="warning" onClick={handleClear}>
        完了したタスクを削除する
      </Button>
    </Box>
  );
};
