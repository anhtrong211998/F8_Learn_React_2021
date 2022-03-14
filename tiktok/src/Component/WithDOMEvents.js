import { useEffect, useState } from "react";

const Tabs = ['posts', 'comments', 'albums'];

function WithDomEvents() {
    const [title, setTitle] = useState('');
    const [datas, setDatas] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(items => setDatas(items));
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoTop(true);
            } else {
                setShowGoTop(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }  
    }, [])

return (
    <div>
        {Tabs.map((tab) => (
            <button
                key={tab}
                style={type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333'
                } : {}}
                onClick={() => setType(tab)}
            >
                {tab}
            </button>
        ))}
        <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <ul>
            {datas.map((item) => (
                <li key={item.id}>{item.title || item.name}</li>
            ))}
        </ul>

        {showGoTop && (
            <button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20
                }}
            >
                Go To Top
            </button>
        )}
    </div>
)
}

export default WithDomEvents;