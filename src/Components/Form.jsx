import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

const Form = ({ title, fields, buttonText, handleSubmit, extras, error, classname = "" }) => {
    return (
        <form
            className={`flex flex-col gap-4 m-2 items-center justify-center w-full max-w-[380px] p-2 ${classname}`}
            onSubmit={handleSubmit}
        >
            <h1 className='text-center text-3xl font-serif font-extrabold'>
                {title}
            </h1>

            {fields.map((field) => (
                <FormInput
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                />
            ))}


            {error ? <p className="text-red-500 text-sm">{error}</p> : null}

            <SubmitButton text={buttonText} type="submit" />

            <>
                {extras && extras}
            </>

        </form>
    )
}

export default Form
