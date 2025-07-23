const InputRadioProgress = ({ id, value }) => {

    return (
        <>
            <label
                className={`
                    h-full w-[10%] relative z-1 translate-y-[4px]
                    bg-[url('/arrow-progress.png')] bg-contain bg-center bg-no-repeat
                `}
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