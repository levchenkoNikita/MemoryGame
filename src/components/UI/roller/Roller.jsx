const Roller = () => {
    return (
        <div
            className={`
                w-full h-[50%] absolute top-[50%] left-[50%] -translate-[50%] 
                bg-[url('/roller-board.png')] bg-center bg-cover bg-no-repeat
                flex items-center justify-between
            `}>
            <button
                className={`
                    h-full aspect-[1] 
                    bg-[url('/roller-pin.png')] bg-center bg-contain bg-no-repeat
                `}>

            </button>
            <button
                className={`
                    h-full aspect-[1] 
                    bg-[url('/roller-pin.png')] bg-center bg-contain bg-no-repeat
                `}>

            </button>
        </div>
    );
}

export default Roller;