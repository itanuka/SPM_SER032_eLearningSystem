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

            <div className="container">
                <h1 className="text-center">{course.course_name}</h1>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div class="card" >
                            <div class="col mb-4">
                                <img src="https://wisdomtreeindia.com/images/product/Mini-Habits-Cover.jpg"
                                    className="card-img-top mt-3"
                                    style={{ width: "500px", height: "450px" }} alt="..."
                                />
                                <div class="card-body">
                                    {/* <h5 class="card-title">{book.title}</h5> */}
                                    <h6 class="card-text">Author: {course.author_name}</h6>
                                    <h6 class="card-text">Description: {course.description}</h6>
                                    <h6 class="card-text">Category: {course.category}</h6>
                                    <button
                                        // onClick={
                                        //         () => {
                                        //                  EnrolleCourse();
                                        //                 }
                                        //         }
                                        onClick={()=>{
                                            addToList()
                                        }}
                                        className="btn btn-primary mt-3">
                                        Enrolled Course
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>



            </div>


        </div>
    )
}

export default StudentViewCourse;