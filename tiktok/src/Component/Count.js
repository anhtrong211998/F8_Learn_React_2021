import {useState} from 'react';

const orders = [100,200,300];

const Count = () => {
    // initial state with callback
    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total,cur) => total + cur);
        return total;
    });

    // set state with callback
    const handleIncreaseCallBack = () => {
        setCounter(prevState => prevState + 1);
        setCounter(prevState => prevState + 1);
        setCounter(prevState => prevState + 1);
        setCounter(prevState => prevState + 1);
    }

    console.log("re-render");

    return (
        <>
            <h1>{counter}</h1>
			<button onClick={handleIncreaseCallBack}>Increase</button>
        </>
    )
}

export default Count;