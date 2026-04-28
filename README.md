# SimpToDo

> A desktop-based To-Do application built with React that allows users to add, edit, and delete tasks while storing data in LocalStorage for persistence across sessions. The project showcases key React fundamentals, including state management, event handling, conditional rendering, and real-time UI updates.

Local Storage Logic:

1. Sign up
   - When a user signs up, they get added to a "users" array in localStorage

2. Sign In
   - When a user signs in, it search the "users" array for a match, then create a separate session under "loggedInUser"

3. Taskboard
   - When the taskboard loads, it reads "loggedInUser" to know who is logged in, then uses their email to find their personal tasks. Each user gets their own task list key based on their email, so users never see each other's tasks.

4. Logout
   - Logout simply removes "loggedInUser" from localStorage. The "users" array and tasks remain untouched — only the session is cleared. So when John logs back in, his tasks are still there.

Live URl: [deployed on Netlify](https://simpltaskboard.netlify.app/)
By Clicking this link, you'll be taken to the deployed web application where you can explore all features of this project

# Stack/Tools used

1. ReactJs
2. Tailwind CSS
