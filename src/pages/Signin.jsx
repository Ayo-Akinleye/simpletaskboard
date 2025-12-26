import { useState } from 'react';
import SimpleButton from '../Components/SubmitButton';
import RememberMe from '../Components/RememberMe';
import { useNavigate, Link } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedEmail = (storedUser.email || "").trim().toLowerCase();
    const inputEmail = (email || "").trim().toLowerCase();

    if (!storedUser) {
      setError("No account found. Please sign up first");
      return;
    }

    if (inputEmail !== storedEmail) {
      setError("No account found. Please sign up first");
      return;
    }

    if (password !== storedUser.password) {
      setError("Incorrect password");
      return;
    }

    setError("")
    alert("Log in successful. You'll be directed to your Taskboard.")
    navigate("/taskboard")
  };


  return (
    <div>
      <div className='flex w-screen min-h-screen'>
        <div className='flex flex-1 flex-col items-center justify-center'>
          <h1 className='text-center text-4xl font-serif font-extrabold m-2'>
            Sign in
          </h1>

          <form className='flex flex-col gap-3 m-2 items-center' onSubmit={handleSubmit}>

            <div className='flex gap-1'>
              <input required
                type='email'
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-gray-200 h-[35px] w-[300px] p-2 placeholder-gray-400                            focus:outline-none focus:border-black'
              />
            </div>

            <div className='flex gap-1'>
              <input required
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                className='bg-gray-200 h-[35px] w-[300px] p-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
              />
            </div>

            {error ? <p className="text-red-500 text-sm">{error}</p> : null}

            <RememberMe />
            <SimpleButton text="Sign in" type='submit' />
          </form>


          <a href='#' className='text-sm text-pink-700 hover:underline mt-2'>Forgot password?</a>
        </div>

        <div className='flex flex-1 flex-col bg-pink-700 items-center justify-center'>
          <h1 className='text-white text-4xl font-bold'>Hello, Friend👋</h1>
          <h1 className='text-white text-xl mt-4'>Enter your details to pick up where you left off.</h1>
          <p className='text-white mt-2'>
            Don't have an account yet?
            <Link to="/signup" className='text-blue-500 underline cursor-pointer'>Sign up</Link>
          </p>
        </div>

      </div>
    </div>

  )
}

export default Signin
