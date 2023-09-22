import { Itasks } from "./types/task";

const baseUrl = "http://localhost:3001";

const getAllTodos = async (): Promise<Itasks[]> => {
  const res = await fetch(`${baseUrl}/task`);
  const todos = await res.json();
  return todos;
};

export default getAllTodos;
