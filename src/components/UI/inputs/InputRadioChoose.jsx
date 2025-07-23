const InputRadioChoose = ({ id, value, checked }) => {

    return (
        <>
            <label
                className={
                    checked
                        ? `h-full w-[10%] relative z-1 -translate-y-[4px]
                        bg-[url('/arrow-choose.png')] bg-contain bg-center bg-no-repeat`
                        : `h-full w-[10%] bg-blue-300 border`
                }
                htmlFor={id}
            >
                
            </label>
            <input
                className={`hidden`}
                type="radio"
                name="choose"
                id={id}
                value={value}
                disabled={true}
            />
        </>
    );
}

export default InputRadioChoose;
