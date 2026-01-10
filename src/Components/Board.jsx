import { Trash2 } from "lucide-react"

const Board = ({ task, taskList, setTaskList }) => {

    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task);
        setTaskList(taskList.filter((_, index) => index !== removeIndex))
    }

    return (
        <div>
            <div className='max-w-lg rounded-xl flex flex-col items-center justify-center border text-center text-lg px-2 pt-2 pb-4'>
                <p className="">{task}</p>

                <button onClick={handleDelete}
                    className="text-red-400 hover:text-red-600 cursor-pointer self-end px-2 rounded-full transition"
                    aria-label="Delete task"
                >
                    <Trash2 size={20} />
                </button>

            </div>
        </div>
    )
}

export default Board
