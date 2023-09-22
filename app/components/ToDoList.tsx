import { Itasks } from "@/types/task";
import React from "react";

interface TodoListProps {
  tasks: Itasks[];
}

const ToDoList: React.FC<TodoListProps> = ({ tasks }) => {
  if (!tasks) {
    return null;
  }
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500 bg-gray-200">
                  <tr>
                    <th>No</th>
                    <th scope="col" className="px-6 py-4">
                      Heading
                    </th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => {
                    const color =
                      task.status === "completed"
                        ? "bg-green-200"
                        : "bg-red-200";

                    return (
                      <tr
                        className={`border-b border-success-200 ${color}  text-black font-bold`}
                        key={task.id}
                      >
                        <td>{task.id}</td>
                        <td className=" px-6 py-4 ">{task.text}</td>
                        <td className=" px-6 py-4">{task.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
