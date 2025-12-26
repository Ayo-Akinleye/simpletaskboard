export default function SubmitButton({ text, type = "button", className = "" }) {

    return (
        <button
            type={type}
            className={`border rounded-xl px-4 py-2 cursor-pointer bg-pink-700 text-white hover:animate-pulse ${className}`}>
            {text}
        </button>
    )
}