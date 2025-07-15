import './CardItem.css';

function CardItem({ id, value, imageBg, imageFr, onClickCard, isActive }) {

    return (
        <button
            className={`
                aspect-[1] w-full rounded-[16px]
                bg-white p-[20px] flex center justify-center
                ${isActive ? 'animate-flip' : 'animate-flipBack'}
            `}
            type="button"
            disabled={isActive}
            onClick={() => onClickCard(id, value)}
        >

            <div
                className={
                    isActive
                        ? `${imageFr} w-[50%] aspect-[1] bg-contain rounded-[8px] bg-center bg-no-repeat cardItem `
                        : `${imageBg} w-full aspect-[1] bg-cover cursor-pointer rounded-[8px] bg-center bg-no-repeat cardItem`
                }
            >
            </div>

        </button>
    )
}

export default CardItem;