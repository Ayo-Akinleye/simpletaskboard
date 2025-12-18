import { useState } from "react";

const RememberMe = () => {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className='flex flex-row gap-1 w-full items-center justify-start'>
            <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                id="remember"
                className='accent-pink-700'
            />

            <label
                htmlFor="remember"
                className='text-sm text-gray-600 cursor-pointer'
            >
                Remember me
            </label>
        </div>
    )
}

export default RememberMe
