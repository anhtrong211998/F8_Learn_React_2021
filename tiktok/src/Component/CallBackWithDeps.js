import { useEffect, useState } from "react";

const Tabs = ['posts','comments','albums'];

function CallBackWitDeps(){
    const [title,setTitle] = useState('');
    const [datas, setDatas] = useState([]);
    const [type,setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(items => setDatas(items));
    },[type])

    return (
        <div>
            {Tabs.map((tab) => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color:'#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input onChange={(e) => setTitle(e.target.value)} />
            <ul>
                {datas.map((item) => (
                    <li key={item.id}>{item.title || item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CallBackWitDeps;