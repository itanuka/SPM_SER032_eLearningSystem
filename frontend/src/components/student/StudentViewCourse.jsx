import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";



function StudentViewCourse() {
    let navigate = useNavigate();

    const [course, setCourse] = useState({});
    // wadi wada
    // const [courseName, setcourseName] = useState({});
    
    const { id } = useParams();

    const [course_name, setCourseName] = useState(course.course_name);
    const [author_name, setAuthorName] = useState(course.author_name);
    const [description, setDescription] = useState(course.description);
    const [category, setCategory] = useState(course.setCategory);


    const handleCategory = (e) => {
        setCategory(e.target.value);
    };


    async function getCourseDetails() {
        axios.get(`http://localhost:4000/api/v1/courses/getSingleCourse/${id}`)
            .then((res) => {

                setCourse(res.data);
                console.log(res.data);
            })
            .catch(err => console.error(err))
    }

    async function addToList() {
        await axios.post('http://localhost:4000/api/v1/enrolle/newEnroll', {enrolledItems: [{course: id, studentID: Math.floor(Math.random() * 25)}]})
        .then(res=>{console.log(res.data)})
        .catch(err=>console.error(err))

        navigate('/course/ViewEnrolledCourses')
    }

    useEffect(() => {
        getCourseDetails()
        
    }, [])

    return (
        <div>
            <div className="container" style={{ height: "30px" }}></div>
            <div className="container" style={{ height: "595px" }}>

            <div className="row">
                <div className="col-md-7">
                <div >
                                    <img src="https://wisdomtreeindia.com/images/product/Mini-Habits-Cover.jpg"
                                    className="card-img-top mt-3"
                                    style={{ width: "400px", height: "400px" }} alt="..."
                                />
                                </div>
                </div>
                <div className="col-md-5">

                <div className=""  >

                        <h4 className="tex-uppercase text-black-50">Category :  {course.category} </h4>
                        <h1 className="display-5">Course Name : {course.course_name}</h1>
                        <h3 className="display-6 fw-bold my-4">Author Name : {course.author_name}</h3>
                        <p className="lead"> Description: <br /> {course.description}</p>
                        <button onClick={()=>{
                                addToList()
                                }}
                                className="btn btn-primary mt-3">
                            Enroll Course
                        </button>

                        </div>
                </div>
            </div>
                
            </div>
            

                                
                                
                                


        </div>
    )
}

export default StudentViewCourse;