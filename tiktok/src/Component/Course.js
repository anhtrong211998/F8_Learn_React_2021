import { useState } from "react";

const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
];

const Course = () => {
    const [radio, setRadio] = useState();

    const [checkbox, setCheckbox] = useState([]);

    const handleCheckBox = (id) => {
        setCheckbox(prev => {
            const isChecked = checkbox.includes(id);
            if(isChecked){
                return checkbox.filter(x => x !== id);
            }else{
                return [...prev,id];
            }
        })
    }

    const handleSubmit = () => {
        // call API
        console.log({
            radio: radio,
            checkboxs: checkbox
        });
    }

    return (
        <>
            {courses.map((course) => (
				<div key={course.id}>
					<input 
						type="checkbox"
						checked={checkbox.includes(course.id)}
						onChange = {() => handleCheckBox(course.id)}
					/>
					
					<input 
						type="radio" 
						checked = {radio === course.id}
						onChange={() => setRadio(course.id)}
					/>
					{course.name}
				</div>
            ))}
            <button onClick={handleSubmit}>Register</button>
        </>
    )
}

export default Course;