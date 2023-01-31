import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Box,
  Typography,
  Stack,
  TextField,
  Modal,
} from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export const AddTodo = ({ setTodos }) => {
  //モーダルの初期値、開閉時の処理
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //タスクの追加処理
  const todoNameRef = useRef();
  const todoRemarksRef = useRef();
  const todoDay = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    const remarks = todoRemarksRef.current.value;
    const day = todoDay.current.value;

    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, 
        {id: uuidv4(), name: name, completed: false, remarks: remarks, day: day },
      ];
    });
    todoNameRef.current.value = null;
    handleClose();
  };

  //カレンダーの初期値、変更時の処理
  const [value, setValue] = useState(dayjs(new Date()));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        タスクを追加する
      </Button>
      <Modal
        open={open}
        aria-labelledby="todo-title"
        aria-describedby="todo-description"
      >
        <Box sx={style}>
          <Typography variant="h5" gutterBottom>
            タスク内容
          </Typography>
          <Stack spacing={3}>
            <TextField inputRef={todoNameRef} />
          </Stack>
          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            期日
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DesktopDatePicker
                inputFormat="YYYY/MM/DD"
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField {...params} inputRef={todoDay} />
                )}
              />
            </Stack>
          </LocalizationProvider>
          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            備考
          </Typography>
          <Stack spacing={3}>
            <TextField inputRef={todoRemarksRef} />
          </Stack>
          <Box
            sx={{ mt: 3 }}
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Button sx={{ mr: 3 }} variant="outlined" onClick={handleClose}>
              追加をやめる
            </Button>
            <Button variant="contained" onClick={handleAddTodo}>
              この内容で追加する
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
