import { useEffect, useState } from "react";

// TH useEffect(callback)
function OnlyCallBack(){
    const [title,setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    //// luôn luôn được call sau khi re-render => có thể làm cho thành 
    //// vòng lặp vô hạn => ảnh hưởng đến hiệu năng
    useEffect(() => {
        console.log('mounted');
        document.title = title;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts));
    })

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

export default OnlyCallBack;