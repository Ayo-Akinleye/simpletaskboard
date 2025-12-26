import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("")

  return (
    <div>
      <input
        type="text"
        placeholder="New Task"
        value={input}
        className="border h-[30px] rounded-md placeholder-gray-500 p-2 focus:outline-none"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  )
}

export default Input
