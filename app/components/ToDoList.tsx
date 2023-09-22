import React from "react";

const ToDoList = () => {
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
                      Class
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Heading
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Heading
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-success-200 bg-green-200 text-neutral-800">
                    <td>1</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      Success
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Cell</td>
                    <td className="whitespace-nowrap px-6 py-4">Cell</td>
                  </tr>
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
