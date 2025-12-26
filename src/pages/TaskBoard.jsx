import Input from "../Components/Input";
import SubmitButton from "../Components/SubmitButton";

const TaskBoard = () => {

  return (
    <div>
      <h1>Welcome, </h1>
      <div className="flex gap-2">
        <Input />
        <SubmitButton text="Add" className="px-2 py-1 text-sm" />
      </div>

    </div>
  )

}

export default TaskBoard
