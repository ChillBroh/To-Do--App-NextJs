import React from "react";
import ToDoList from "../components/ToDoList";

const ViewTask = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center text-2xl m-5 font-bold ">All Tasks</div>
      <ToDoList />
    </div>
  );
};

export default ViewTask;
