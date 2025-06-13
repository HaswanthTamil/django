"use client"

import { useState } from "react"

interface Task {
  id: number
  task_name: string
  created_at: string
}

interface NewTaskProps {
  onTaskAdd: (task: Task) => void
  setIsVisible: (visible: boolean) => void
}

const NewTask: React.FC<NewTaskProps> = ({ onTaskAdd, setIsVisible }) => {
  const [task, setTask] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch("http://127.0.0.1:8000/api/tasks/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task_name: task }),
      })

      if (!res.ok) throw new Error("Failed to add task")

      const data = await res.json()
      onTaskAdd(data)
      setTask("")
    } catch (err) {
      console.log(err)
    }

    setIsVisible(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 my-4 text-white">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border px-2 py-1 rounded w-full"
          placeholder="Add a new task..."
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
      </form>
    </div>
  )
}

export default NewTask
