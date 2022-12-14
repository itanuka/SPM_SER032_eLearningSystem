import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function StudentViewAllCourses() {
    let navigate = useNavigate();

    const [courses, setCourses] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("")

    const loadCourses = async () => {
        await axios.get("http://localhost:4000/api/v1/courses/getAllCourses")
        
            .then((res) => {
                setCourses(res.data);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const filteredCourseList = courses.filter((course) => {
            return course.course_name.toLowerCase().includes(searchKeyword.toLowerCase())
        })



    useEffect(() => {
        loadCourses()
    }, []);

    return (
        <div>
        <div className = "row" style={{ maxWidth: "100%" }}>
           
            <div className="container">
                <h1 className="text-center">Welcome...!</h1>
            </div>
            <input type="text"
                onChange={(e)=>{
                    setSearchKeyword(e.target.value)
                }}
                placeholder="Search by course name"
            />
            <div className="container mt-5">
                <div class="row row-cols-1 row-cols-md-3">
                    {
                        filteredCourseList.map((course) => {
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
                                                    {/* <h6 class="card-text">Description: {course.description}</h6> */}
                                                    <button
                                                        onClick={
                                                            () => {
                                                                navigate(`/course/ViewSingleCourse/${course._id}`)
                                                            }
                                                        }
                                                        className="btn btn-primary mt-3">
                                                        View More...
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
        </div>
    )
}

export default StudentViewAllCourses;