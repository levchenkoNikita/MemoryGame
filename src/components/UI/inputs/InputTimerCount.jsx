const InputTimerCount = ({ id, value, isLast }) => {
    return (
        <>
            <label
                className={
                    `h-full w-[10%]
                    flex items-center justify-center relative
                    ${isLast 
                        ? '' 
                        : 
                        `
                            after:content-[''] after:w-[4px] after:aspect-[1] after:bg-black after:rounded-full
                            after:absolute after:top-[50%] after:left-[100%] after:-translate-[50%]
                        ` 
                    }
                    `
                }
                htmlFor={id}
            >
                {value}
            </label>
            <input className="hidden" type="radio" name="count" value={value} id={id} />
        </>

    );
}

export default InputTimerCount;