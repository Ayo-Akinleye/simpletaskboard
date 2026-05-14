import { useState, useEffect } from 'react';
import Board from '../Components/Board';
import TaskboardInput from '../Components/TaskboardInput';
import { LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const TaskBoard = () => {

  // getting the logged-in user from localStorage
  const [user] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // unique key for storing tasks in localStorage
  const taskKey = `taskList_${user?.email || "guest"}`;

  const [taskList, setTaskList] = useState(() => {
    if (!user?.email) return [];   // if no user - return empty array(no tasks)
    const savedTasks = localStorage.getItem(`taskList_${user.email}`);
    return savedTasks ? JSON.parse(savedTasks) : []
  });

  useEffect(() => {
    if (!user?.email) return;
    localStorage.setItem(taskKey, JSON.stringify(taskList));
  }, [taskList, taskKey, user]);


  const navigate = useNavigate()

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("loggedInUser");
      navigate("/signin", { replace: true });
      // replace: true means user can't go back to the previous page using the back button.
    }
  }

  return (
    <div className='min-h-screen w-screen flex flex-col'>
      <div className='flex flex-col items-center py-8 gap-4'>

        {/* welcome and logout button */}
        <div className='flex items-center w-full px-6 h-16 relative'>
          <h1 className='absolute left-1/2 -translate-x-1/2 m-0 whitespace-nowrap text:lg md:text-2xl font-bold'>
            {user ? `Welcome, ${user.fullname}` : "Welcome"}
          </h1>
          <button
            className='ml-auto cursor-pointer hover:text-red-500'
            aria-label='logout'
            onClick={handleLogout}
          >
            <LogOut size={20} />
          </button>

        </div>

        {/* input bar for task */}
        <TaskboardInput taskList={taskList} setTaskList={setTaskList} />
      </div>

      {/* actual tasks display */}
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
