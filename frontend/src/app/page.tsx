// src/app/page.tsx
"use client"

import Header from "@/components/nonreusable-ui/Header"
import TaskContainer from "@/components/reusable-ui/TaskContainer"
import "@/styles/globals.css"
import { useState, useEffect } from "react"
import NewTask from "@/components/nonreusable-ui/NewTask"

interface Task {
  id: number
  task_name: string
  created_at: string
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const filteredTasks = tasks.filter((task) =>
    task.task_name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/tasks/")
      if (!res.ok) throw new Error("Failed to fetch data")
      const data = await res.json()
      setTasks(data)
    }

    fetchData()
  }, [])

  const handleDelete = async (taskId: number) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
        method: "DELETE",
      })

      if (!res.ok) throw new Error("Failed to delete task")

      setTasks((prev) => prev.filter((task) => task.id !== taskId))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="content h-[100vh] flex flex-col bg-black items-center">
        <Header
          setIsVisible={setIsVisible}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div className={`${isVisible ? "block" : "hidden"}`}>
          <NewTask
            setIsVisible={setIsVisible}
            onTaskAdd={(newTask: Task) => {
              setTasks((prev) => [...prev, newTask])
            }}
          />
        </div>
        <div className="flex flex-col items-center p-2 flex-grow">
          {filteredTasks &&
            filteredTasks.map((task: Task) => (
              <TaskContainer key={task.id}>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="absolute top-0 right-2 rounded-md px-1 hover:text-red-500 hover:scale-110 transition-all duration-300 ease-out"
                >
                  X
                </button>
                <p>{task.task_name}</p>
              </TaskContainer>
            ))}
        </div>
      </div>
    </>
  )
}
