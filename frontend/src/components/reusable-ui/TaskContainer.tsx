"use client"

import { ReactNode } from "react"

type TaskContainerProps = {
  children: ReactNode
}

const TaskContainer = ({ children }: TaskContainerProps) => {
  return (
    <>
      <div className="task-box w-2xl flex justify-center items-center my-5 relative">
        {children}
      </div>
    </>
  )
}

export default TaskContainer
