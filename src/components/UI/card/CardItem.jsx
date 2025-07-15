function CardItem({ id, value, imageBg, imageFr, onClickCard, isActive, isAside }) {

    return (
        <button
            className={`
                ${isAside ? 'h-full w-[10px] rounded-[4px]' : 'aspect-[1] w-full rounded-[16px] p-[20px]'}
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
                            ? `${imageFr} w-[50%] aspect-[1] bg-contain rounded-[8px] bg-center bg-no-repeat`
                            : `${imageBg} w-full aspect-[1] bg-cover cursor-pointer rounded-[8px] bg-center bg-no-repeat`
                }
            >
            </div>

        </button>
    )
}

export default CardItem;