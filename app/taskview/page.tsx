"use client";
import React, { useEffect, useState } from "react";
import ToDoList from "../components/ToDoList";
import { getAllTodos } from "@/api";
import { Itasks } from "@/types/task";

const ViewTask = () => {
  const [tasks, setTasks] = useState<Itasks[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasksData: Itasks[] = await getAllTodos();

        setTasks(tasksData);
      } catch (error) {
        throw new Error("Error Fetching Data");
      }
    };

    fetchData(); // Call the async function here
  }, []);
  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center text-2xl m-5 font-bold ">All Tasks</div>
      <ToDoList tasks={tasks} />
    </div>
  );
};

export default ViewTask;
