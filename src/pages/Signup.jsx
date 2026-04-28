import { useState } from 'react';
import SubmitButton from '../Components/SubmitButton';
import { useNavigate, Link } from 'react-router-dom';
import Form from '../Components/Form';

const Signup = () => {

    const SignupFields = [
        { name: 'fullname', type: "text", placeholder: 'Fullname' },
        { name: 'email', type: "email", placeholder: 'Email Address' },
        { name: 'password', type: "password", placeholder: 'Password' },
        { name: 'confirm password', type: "password", placeholder: 'Confirm Password' },
    ]

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");

    const navigate = useNavigate()

    // Function to handle sign up form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("passwords do not match")
            return;
        }

        // Localstorage
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const cleanEmail = email.trim().toLowerCase();

        const emailExists = existingUsers.some(user => user.email === cleanEmail);
        // .some() checks if the email already exists across all users

        if (emailExists) {
            setError("Email already assigned to an account!");
        }

        //   Add new user to array
        const newUser = { fullname, email: cleanEmail, password };
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));


        // After successful 
        setFullname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        alert("Sign up successful. You'll be directed to login")
        navigate('/signin')
    };

    return (
        <div>
            <div className='flex flex-row w-screen min-h-screen'>
                {/* Left welcome panel - hidden on mobile */}
                <div className='hidden lg:flex flex-1 flex-col bg-pink-700 items-center justify-center'>
                    <h1 className='text-white text-4xl font-bold'>SimpToDo♧</h1>
                    <h1 className='text-white mt-3'>Organize your tasks. Clear your mind. Get more done.</h1>
                </div>

                {/* Right panel, visible across screens */}
                <div className="flex flex-col flex-1 p-10 min-h-screen">

                    {/* Logo */}
                    <h1 className='text-pink-700 text-2xl font-bold'>SimpToDo♧</h1>

                    {/* form + extra information */}
                    <div className='flex flex-1 flex-col items-center justify-center'>
                        <Form
                            title="Sign up"
                            fields={SignupFields}
                            buttonText='Sign up'
                            handleSubmit={handleSubmit}
                            error={error}
                            extras={
                                <p className='text-center mt-2'>
                                    Already have an account?
                                    <Link to="/signin" className=' text-pink-700 underline cursor-pointer'> Sign in</Link>
                                </p>
                            }
                        />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Signup
