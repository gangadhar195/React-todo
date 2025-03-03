import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, CheckCircle } from "lucide-react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <Input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task" />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="space-y-2">
        {tasks.map((t, index) => (
          <Card key={index} className="flex justify-between items-center p-2">
            <div className={`flex-1 ${t.completed ? "line-through text-gray-500" : ""}`}>
              {t.text}
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={() => toggleComplete(index)}>
                <CheckCircle className={`text-${t.completed ? "green" : "gray"}-500`} />
              </Button>
              <Button variant="ghost" onClick={() => deleteTask(index)}>
                <Trash2 className="text-red-500" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
