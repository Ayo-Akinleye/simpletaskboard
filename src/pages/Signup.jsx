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
            if (userData.email === storedUser.email) {
                setError("Email already assigned to an account!!. ")
            }

            // setError("Account already exists. Kindly sign in. ");
            // return;
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
            <div className='border-2 rounded-md flex flex-col gap-2 p-2'>

                <h1 className='text-center text-2xl font-serif font-extrabold'>
                    Sign up
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-3 m-2'
                >
                    <div className='flex gap-1'>
                        <label className='font-bold'>Fullname:</label>
                        <input required
                            type='text'
                            placeholder='e.g John Doe'
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className='border border-gray-100 rounded px-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
                        />
                    </div>

                    <div className='flex gap-1'>
                        <label className="font-bold">Email address:</label>
                        <input required
                            type='email'
                            placeholder='e.g johndoe@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border border-gray-100 rounded px-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
                        />
                    </div>

                    <div className='flex gap-1'>
                        <label className="font-bold">Password:</label>
                        <input required
                            type='password'
                            placeholder='********'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (error) setError("");
                            }}
                            className='border border-gray-100 rounded px-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
                        />
                    </div>

                    <div className='flex gap-1'>
                        <label className="font-bold">Confirm Password:</label>
                        <input required
                            type='password'
                            placeholder='********'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='border border-gray-100 rounded px-2 placeholder-gray-400
                                        focus:outline-none focus:border-black'
                        />
                    </div>

                    {error ? <p className="text-red-500 text-sm">{error}</p> : null}

                    <SubmitButton text="Sign up" type="submit" />
                </form>
            </div>
            <p className='text-center mt-2'>
                Already have an account?
                <Link to="/signin" className=' text-blue-500 underline cursor-pointer'>Sign in</Link>
            </p>
        </div>
    )
}

export default Signup
