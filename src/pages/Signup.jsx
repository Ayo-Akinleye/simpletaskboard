import { useState } from 'react';
import SubmitButton from '../Components/SubmitButton';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Invalid email!");
            return;
        }

        if (password !== confirmPassword) {
            setError("passwords do not match")
            return;
        }

        // Localstorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const cleanEmail = email.trim().toLowerCase();

        if (storedUser) {
            if (cleanEmail === storedUser.email) {
                setError("Email already assigned to an account!!. ");
                return;
            }
        }

        const userData = {
            fullname,
            email: cleanEmail,
            password,
        };

        localStorage.setItem("user", JSON.stringify(userData));


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
                <div className='flex flex-1 flex-col bg-pink-700 items-center justify-center'>
                    <h1 className='text-white text-4xl font-bold'>SimpToDo♧</h1>
                    <h1 className='text-white mt-3'>Organize your tasks. Clear your mind. Get more done.</h1>
                </div>

                <div className="flex flex-col flex-1 items-center justify-center">
                    <div className=' w-[380px] rounded-md flex flex-col gap-3 p-2'>

                        <h1 className='text-center text-4xl font-serif font-extrabold'>
                            Sign up
                        </h1>

                        <form
                            onSubmit={handleSubmit}
                            className='flex flex-col gap-4 m-2 items-center'
                        >
                            <div className='flex gap-1'>
                                <input required
                                    type='text'
                                    placeholder='Fullname'
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    className='bg-gray-200 h-[35px] w-[300px] p-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
                                />
                            </div>

                            <div className='flex gap-1'>
                                <input required
                                    type='email'
                                    placeholder='Email address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='bg-gray-200 h-[35px] w-[300px] p-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
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

                            <div className='flex gap-1'>
                                <input required
                                    type='password'
                                    placeholder='Confirm password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className='bg-gray-200 h-[35px] w-[300px] p-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
                                />
                            </div>

                            {error ? <p className="text-red-500 text-sm">{error}</p> : null}

                            <SubmitButton text="Sign up" type="submit" />
                        </form>
                    </div>
                    <p className='text-center mt-2'>
                        Already have an account?
                        <Link to="/signin" className=' text-pink-700 underline cursor-pointer'> Sign in</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Signup
