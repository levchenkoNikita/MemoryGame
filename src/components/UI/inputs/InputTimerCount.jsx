const InputTimerCount = ({ value, isLast, onClick }) => {
    return (
            <button
                className={
                    `h-full w-[10%]
                    flex items-center justify-center relative
                    ${isLast 
                        ? '' 
                        : 
                        `
                            after:content-[''] after:w-[10%] after:aspect-[1] after:bg-black after:rounded-full
                            after:absolute after:top-[50%] after:left-[100%] after:-translate-[50%]
                        ` 
                    }
                    `
                }
                onClick={() => onClick(value)}
            >
                {value}
            </button>
    );
}

export default InputTimerCount;