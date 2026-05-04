import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import TaskBoard from './pages/TaskBoard';
import NoPage from './pages/NoPage';
import ProtectedRoute from './Routes/ProtectedRoute';
import PublicRoute from './Routes/PublicRoute';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Signin />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="taskboard" element={
              <ProtectedRoute>
                <TaskBoard />
              </ProtectedRoute>
            } />
          </Route>
          <Route path='*' element={<NoPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
