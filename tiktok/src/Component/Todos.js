import { useState } from "react"

const Todo = () => {
    const [job, setJob] = useState();
    const [jobs, setJobs] = useState(() => {
        // get value from local storage
        const storeJobs = JSON.parse(localStorage.getItem('jobs'));
        return storeJobs ?? [];
    });

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev,job];
            const jsonJobs = JSON.stringify(newJobs);

            // save to local storage
            localStorage.setItem('jobs', jsonJobs);
            return newJobs;
        });

        setJob('');
    }

    return (
        <>
            <input 
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Todo;