import React from "react";

function CardItem() {
    return (
        <button className={`w-[200px] h-[200px] bg-white p-[24px] flex center justify-center rounded-[16px]`} type="button">
            <div className="w-[152px] h-[152px] bg-[url('../assets/images/card-back.png')] rounded-[8px]"></div>
        </button>
    )
}