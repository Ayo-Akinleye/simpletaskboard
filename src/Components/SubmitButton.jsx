export default function SubmitButton({ text, type = "button", className = "", onClick }) {

    return (
        <button
            type={type}
            onClick={onClick}
            className={`border rounded-xl px-4 py-2 cursor-pointer font-semibold bg-pink-700 text-white hover:animate-pulse ${className}`}>
            {text}
        </button>
    )
}