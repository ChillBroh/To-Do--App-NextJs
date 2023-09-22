import React from "react";
import { Button, Space } from "antd";
import { AiOutlinePlus } from "react-icons/ai";

const AddTask = () => {
  return (
    <div>
      <Button
        type="primary"
        className="text-white bg-blue-600 w-full"
        icon={<AiOutlinePlus size={10} className="text-white" />}
      >
        Add New Task
      </Button>
    </div>
  );
};

export default AddTask;
