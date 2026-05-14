import { useNavigate, useLocation } from 'react-router-dom';

const NoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <h1>404 – Page Not Found</h1>
      <p>
        <span className='font-semibold'>"{location.pathname}"</span>  does not exist.
      </p>
      <button
        onClick={() => navigate('/')}
        className='underline cursor-pointer'
      >
        Go Home
      </button>
    </div>
  )
}

export default NoPage
