const InputTimerCount = ({ value, isLast, onClick }) => {
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
                htmlFor={value}
                onClick={() => onClick(value)}
            >
                {value}
            </label>
            <input className="hidden" type="radio" name="count" value={value} />
        </>

    );
}

export default InputTimerCount;