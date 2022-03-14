import { useEffect, useState } from "react";

// TH useEffect(callback,[])
function CallBackWithDepsNull(){
    const [title,setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    //// chỉ gọi 1 lần duy nhất khi component mounted
    useEffect(() => {
        console.log('mounted');
        document.title = title;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts));
    },[])

    return(
        <div>
            <input 
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default CallBackWithDepsNull;