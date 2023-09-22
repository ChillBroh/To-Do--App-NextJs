"use client";
import React, { FormEventHandler, useState } from "react";
import { Button, Form, Input, Space } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import Model from "./Model";

const AddTask: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");
  const [status, setStatue] = useState();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newTask === "") {
      setStatue("error");
    }
    setNewTask(newTask);
    console.log(newTask);
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
              onClick={() => setStatue("warning")}
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
