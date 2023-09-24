import { Itasks } from "./types/task";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<Itasks[]> => {
  const res = await fetch(`${baseUrl}/task`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addToDo = async (todo: Itasks): Promise<Itasks | undefined> => {
  try {
    const res = await fetch(`${baseUrl}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const newToDo = await res.json();
    return newToDo;
  } catch (error: any) {
    throw new Error("Error Adding Data ");
  }
};
