import AddTask from "@/app/components/AddTask";
import ToDoList from "@/app/components/ToDoList";

export default function addtask() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">ToDo List App</h1>
        <AddTask />
      </div>
      <div>
        <ToDoList />
      </div>
    </main>
  );
}