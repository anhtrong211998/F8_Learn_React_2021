import {useState} from 'react';

const gifts = [
    'CPU i9',
    'RAM 32GB RGB',
    'RGB Keyboard'
];

const Gift = () => {
    const [gift, setGift] = useState();

    const randomgift = () => {
        let index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    }

    return(
        <>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={randomgift}>Lấy phần thưởng</button>
        </>
    )
}

export default Gift;