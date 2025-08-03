function CardItem({ id, value, imageBg, imageFr, onClickCard, isActive, isAside, grid }) {
    
    return (
        <button
            className={`
                ${isAside ? 'h-full w-[6%] rounded-[6px] p-[0px]' : 'aspect-[1] w-full rounded-[10%]'}
                bg-white flex items-center justify-center transition-[0.2s] cursor-pointer
            `}
            type="button"
            disabled={isActive}
            onClick={() => onClickCard(id, value)}
        >

            <div
                className={
                    isAside
                        ? 'hidden'
                        : isActive
                            ? `${imageFr} w-[50%] aspect-[1] bg-contain bg-center bg-no-repeat`
                            : `${imageBg} w-[80%] aspect-[1] bg-cover rounded-[8%] bg-center bg-no-repeat`
                }
            >
            </div>

        </button>
    )
}

export default CardItem;