"use client";
import React, { FormEventHandler, useState } from "react";
import { Button, Form, Input, Space } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import Model from "./Model";
import { addToDo, getAllTodos } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask: React.FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");
  const [status, setStatus] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const allTasks = await getAllTodos();
    // const arr: number = allTasks.length;

    if (newTask === "") {
      setStatus("error");
    }

    setNewTask(newTask);
    setIsModalOpen(false);
    await addToDo({
      id: uuidv4(),
      text: newTask,
      status: "Not completed",
    });
    router.refresh();
  };

  return (
    <div>
      <Button
        type="primary"
        className="text-white bg-blue-600 w-full"
        icon={<AiOutlinePlus size={10} className="text-white" />}
        onClick={showModal}
      >
        Add New Task
      </Button>
      <Model isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h1 className="font-bold text-lg text-center">Add a Task</h1>
          <Space.Compact style={{ width: "100%" }} className="space-x-4">
            <Input
              placeholder="Input here"
              onChange={(e) => setNewTask(e.target.value)}
              status={status}
              onClick={() => setStatus("warning")}
            />
            <button className="bg-black text-white p-3 rounded-lg">
              Submit
            </button>
          </Space.Compact>
        </form>
      </Model>
    </div>
  );
};

export default AddTask;
