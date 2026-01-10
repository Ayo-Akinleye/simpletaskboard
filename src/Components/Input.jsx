import { useState } from "react";
import SubmitButton from "../Components/SubmitButton";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("")

  const handleAddTask = (e) => {
    e.preventDefault()
    setTaskList([...taskList, input])
    setInput("")
  }

  return (
    <form className="flex flex-row items-center gap-3">
      <input
        type="text"
        placeholder="Add New Task"
        value={input}
        className="border rounded-md placeholder-gray-500 py-1 px-2 focus:outline-none"
        onChange={(e) => setInput(e.target.value)}
      />
      <SubmitButton text="Add" onClick={handleAddTask} className="p-2 text-sm" />
    </form>
  )
}

export default Input
