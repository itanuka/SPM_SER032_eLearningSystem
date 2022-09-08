import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function StudentViewAllCourses() {
    let navigate = useNavigate();

    const [courses, setCourses] = useState([]);

    const loadCourses = async () => {
        await axios.get("http://localhost:4000/api/v1/courses/getAllCourses")
        // .then(res=>setCourses(res.data.courses))
            .then((res) => {
                setCourses(res.data);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadCourses()
    }, []);

    return (
        <div>
            <div className="container" style={{ height: "60px" }}></div>
            <div className="container">
                <h1 className="text-center">Courses</h1>
            </div>
            <div className="container mt-5">
                <div class="row row-cols-1 row-cols-md-3">
                    {
                        courses.map((course) => {
                            return (
                                <div >
                                    {
                                        <div class="col mb-4">
                                            <div class="card h-100">
                                                <img src="https://wisdomtreeindia.com/images/product/Mini-Habits-Cover.jpg"
                                                    className="card-img-top" alt="..."
                                                />
                                                <div class="card-body">
                                                    <h5 class="card-title">{course.course_name}</h5>
                                                    <h6 class="card-text">Author: {course.author_name}</h6>
                                                    <h6 class="card-text">Description: {course.description}</h6>
                                                    <button
                                                        onClick={
                                                            () => {
                                                                navigate(`/course/ViewSingleCourse/${course._id}`)
                                                            }
                                                        }
                                                        className="btn btn-primary mt-3">
                                                        View More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default StudentViewAllCourses;