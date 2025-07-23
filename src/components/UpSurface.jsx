import { useState } from 'react';
import Timer from "./UI/timer/Timer";

function UpSurface() {
    const [rounds, setRounds] = useState(0);

    return (
        <div className="h-[20%] bg-[url('/up-bg.png')] bg-center bg-cover bg-no-repeat flex items-center justify-center">
            <Timer></Timer>
        </div>
    )
}

export default UpSurface;