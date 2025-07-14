import React from "react";
import Timer from "./UI/timer/Timer";

function UpSurface() {
    return (
        <div className="h-[20%] bg-[url('../assets/images/up-bg.png')] bg-[center] bg-[cover] bg-[no-repeat] flex items-center justify-center">
            <Timer></Timer>
        </div>
    )
}

export default UpSurface;