import { useState, useEffect } from 'react';
import Board from '../Components/Board';
import Input from "../Components/Input";
import { LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const TaskBoard = () => {

  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("taskList");
    return savedTasks ? JSON.parse(savedTasks) : []
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const [user] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const navigate = useNavigate()

  const handleLogout = () => {
    alert("Are you sure you want to log out?")
    localStorage.removeItem("user");
    navigate("/signin", { replace: true });
  }

  return (
    <div className='min-h-screen w-screen flex flex-col'>
      <div className='flex flex-col items-center py-8 gap-4'>
        <div className='grid grid-cols-3 items-center w-full px-6'>
          <button
            className='justify-self-start cursor-pointer hover:text-red-500'
            aria-label='logout'
            onClick={handleLogout}>
            <LogOut size={20} />
          </button>
          <h1 className='text-2xl font-bold ml-17'>
            {user ? `Welcome, ${user.fullname}` : "Welcome"}
          </h1>

        </div>

        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>

      <div className='flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12'>
        {taskList.map((task, index) =>
          <Board key={index} task={task} index={index} taskList={taskList} setTaskList={setTaskList}
          />
        )}
      </div>

    </div>
  )

}

export default TaskBoard
