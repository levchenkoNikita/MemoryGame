function CardItem({ id, value, imageBg, imageFr, onClickCard, isActive, isAside, grid }) {
    
    return (
        <button
            className={`
                ${grid == 2 ? 'p-[15px] rounded-[10px]' : ''}
                ${grid == 4 ? 'p-[8px] rounded-[8px]' : ''}
                ${grid == 6 ? 'p-[5px] rounded-[4px]' : ''}
                ${isAside ? 'h-full w-[3px] rounded-[4px] p-[0px]' : 'aspect-[1] w-full '}
                bg-white flex center justify-center 
            `}
            type="button"
            disabled={isActive}
            onClick={() => onClickCard(id, value)}
        >

            <div
                className={
                    isAside
                        ? 'hidden rounded-[8px] bg-center bg-no-repeat shrink'
                        : isActive
                            ? `${imageFr} w-[50%] aspect-[1] bg-contain rounded-[2px] bg-center bg-no-repeat`
                            : `${imageBg} w-full aspect-[1] bg-cover cursor-pointer rounded-[2px] bg-center bg-no-repeat`
                }
            >
            </div>

        </button>
    )
}

export default CardItem;