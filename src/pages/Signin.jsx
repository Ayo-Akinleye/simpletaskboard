import { useState } from 'react';
import SimpleButton from '../Components/SubmitButton';
import { useNavigate, Link } from 'react-router-dom';
import Form from '../Components/Form';

const Signin = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const SigninFields = [
    { name: 'email', type: "email", placeholder: 'Email Address', value: email, onChange: (e) => setEmail(e.target.value) },
    { name: 'password', type: "password", placeholder: 'Password', value: password, onChange: (e) => setPassword(e.target.value) }
  ]

  // function to handle sign in form
  const handleSubmit = (e) => {
    e.preventDefault()

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const cleanEmail = email.trim().toLowerCase();

    const foundUser = existingUsers.find(user => user.email === cleanEmail)

    if (!foundUser) {
      setError("No account found. Please sign up first");
      return;
    }

    if (password !== foundUser.password) {
      setError("Incorrect password");
      return;
    }

    setError("")
    alert("Log in successful. You'll be directed to your Taskboard.")

    localStorage.setItem("loggedInUser", JSON.stringify({ fullname: foundUser.fullname, email: foundUser.email }));
    navigate("/taskboard", { replace: true })
  };

  return (
    <div className='flex flex-row w-screen min-h-screen'>
      {/* Left panel - Form Visible across screens */}
      <div className='flex flex-1 flex-col p-10 min-h-screen'>

        {/* Logo */}
        <h1 className='text-pink-700 text-2xl font-bold'>SimpToDo♧</h1>

        {/* form etc */}
        <div className='flex flex-1 flex-col items-center justify-center'>
          <Form
            title="Sign in"
            fields={SigninFields}
            buttonText="Sign in"
            handleSubmit={handleSubmit}
            error={error}
            extras={
              <div className='flex flex-col justify-center items-center'>
                <p className='mt-2'>
                  Don't have an account yet?
                  <Link to="/signup" className='text-pink-700 underline cursor-pointer'> Sign up</Link>
                </p>

                <a href='#' className='text-sm text-pink-700 hover:underline'>Forgot password?</a>
              </div>
            }
          />
        </div>
      </div>


      {/* Right panel - hidden on mobile */}
      <div className='hidden lg:flex flex-1 flex-col bg-pink-700 items-center justify-center'>
        <h1 className='text-white text-4xl font-bold'>Hello, Friend👋</h1>
        <h1 className='text-white text-xl mt-4'>Enter your details to pick up where you left off.</h1>

      </div>

    </div>
  )
}

export default Signin
