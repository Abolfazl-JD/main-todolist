import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/abolfazl-hue/main-todolist",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getWorks() {
    return apiClient.get("/todoList");
  },
  addWork(item) {
    return apiClient.post("/todoList", item);
  },
  changeStatus(workTodo) {
    return apiClient.put(`/todoList/${workTodo.id}`, {
      name: workTodo.name,
      completed: !workTodo.completed,
      id: workTodo.id,
    });
  },
  deleteTodo(id) {
    return apiClient.delete(`/todolist/${id}`);
  },
  changeItem(item) {
    return apiClient.put(`/todoList/${item.id}`, item);
  },
};
