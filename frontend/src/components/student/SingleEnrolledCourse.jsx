import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function SingleEnrolledCourse(props) {
  const [details, setDetails] = useState({});

  async function getEnrolledCourseDetails() {
    await axios
      .get(`http://localhost:4000/api/v1/courses/getSingleCourse/${props.id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.error(err));
  }

//   async function deleteCourse(){
//     await axios
//                 .delete(`http://localhost:4000/api/v1/enrolle/deleteEnrolledCourse/${props.id}`)
//                 .then((response) => {
//                     console.log(response.data);
//                 });
//   }             

  useEffect(() => {
    getEnrolledCourseDetails();
    // deleteCourse()
  }, []);

  return (
    <div>
        <div className="container" style={{ height: "0px" }}></div>

            <div className="container"></div>

            <div className="container mt-5">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div class="card" style={{ width: "29em" }}>
                    <div class="col mb-4">
                        <div class="card-body">
                        <div className="row">
                            <div className="col-md-4">
                            <img
                                src="https://wisdomtreeindia.com/images/product/Mini-Habits-Cover.jpg"
                                className="card-img-top mt-3"
                                style={{ width: "100px", height: "100px" }}
                                alt="..."
                            />
                            </div>
                            <div className="col-md-4 mt-5">
                            <h6 class="card-text"> Name: {details.course_name}</h6>
                            {/* <h6 class="card-text">
                                Description: {details.description}
                            </h6> */}
                            </div>

                            <div className="col-md-4 mt-4">
                            <button className="btn btn-primary mb-2">Feedback</button>
                            <button 
                                        className="btn btn-danger"


                            >Un Enroll</button>
                            </div>
                        </div>

                        {/* <button
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
                                </button> */}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    </div>
  );
}

export default SingleEnrolledCourse;
