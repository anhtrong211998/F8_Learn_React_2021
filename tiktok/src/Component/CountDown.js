import { useEffect, useState } from "react";

function CountDown(){
    const [countdown, setCoundown]= useState(180);

    useEffect(() => {
        if(countdown === 0){
            return;
        }

        const timerId = setInterval(() => {
            setCoundown(prevState => prevState - 1);
        },1000)

        return () => clearInterval(timerId);
    },[])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default CountDown;