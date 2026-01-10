import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import TaskBoard from './pages/TaskBoard';
import NoPage from './pages/NoPage';
import ProtectedRoute from './Routes/ProtectedRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/taskboard' element={
            <ProtectedRoute>
              <TaskBoard />
            </ProtectedRoute>
          } />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
