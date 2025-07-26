const InputRadioProgress = ({ id, value, checked }) => {

    return (
        <>
            <label
                className={
                    `
                        h-full w-[10%] relative z-1 translate-y-[4px]
                        bg-contain bg-center bg-no-repeat
                        ${checked ? "bg-[url('/arrow-progress.png')]" : "bg-transparent"}
                    `
                }
                htmlFor={id}
            >

            </label>
            <input
                className={`hidden`}
                type="radio"
                name="progress"
                id={id}
                value={value}
                disabled={true}
            />
        </>
    );
}

export default InputRadioProgress;