import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ViewCourses() {
    const[courses, setCourses] = useState([])
    const navigate = useNavigate()
    let file_path = ""
    let size = 0
    
    async function getCourses() {
        await axios.get('http://localhost:4000/api/v1/course/getAllCourses')
        .then(res=>{setCourses(res.data); console.log(res.data);})
        .catch(err=>console.error(err))
    }
    
    useEffect(()=>{
        getCourses()
    }, [])
    
    return (
        <div className='container-fluid bg-light'>
        {courses.map(course=>{
            // file_path = course.image_path
            // size = file_path.length
            // path = path.substring(15, size)
            return(
                <div className='row'>
                    <div className='col-md-5'></div>
                    <div className="card" style={{width: "18rem"}}>
                        {/* <img src="https://wisdomtreeindia.com/images/product/Mini-Habits-Cover.jpg" className="card-img-top" alt="image related to course"/> */}
                        <img src={course.file_path} className="card-img-top" alt="image related to course"/>
                        <div className="card-body">
                            <h1> {file_path} </h1>
                            <h5 className="card-title"> {course.name} </h5>
                            <p className="card-text"> {course.description} </p>
                            <p className="card-text"> {course.category} </p>
                            <button onClick={()=>navigate(`/teachers/uploadCourseMaterial/${course._id}`)} > Add Course Material </button>
                        </div>
                    </div>
                    <div className='col-md-5'></div>
                </div>
            )
        })}
    </div>
  )
}

export default ViewCourses