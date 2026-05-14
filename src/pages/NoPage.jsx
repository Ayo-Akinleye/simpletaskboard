import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div>
      <h1>Error: Page Not Found.</h1>
      <p>Return to 
        <Link to="/signin" className='text-pink-700 underline cursor-pointer'> Sign in</Link> page
      </p>
    </div>
  )
}

export default NoPage
