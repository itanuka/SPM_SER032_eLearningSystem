import { useState, useEffect, useContext } from "react";
import jwtDecode from 'jwt-decode'

import { Link, useNavigate } from "react-router-dom";
import TeacherSideBar from '../layout/TeacherSideBar';
import { UserContext } from '../../UserContext';
import '../style/teacherHome.css'

function TeacherHome() {

    const { user } = useContext(UserContext);

    //   const navigate = useNavigate();

    //   useEffect(() => {

    //     try {
    //       const jwt = localStorage.getItem("token");
    //       setUser(jwtDecode(jwt));
    //       let userObectID = jwtDecode(jwt).userObectID;
    //       let navigateLink = "/students/view/" + userObectID;
    //       setNavigateLink(navigateLink);
    //     } catch (error) {

    //     }
    //   }, []);
    return (
        <div>
            <div className="row" style={{ maxWidth: "100%" }}>

                <div className="col-2">
                    <TeacherSideBar />
                </div>

                <div className="col-10">
                    <div className="container">
                        <div class="row row-cols-1 row-cols-md-2 mt-5">





                            <div class="col mb-4">
                                <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                    <div class="card-header text-center">Update Profile</div>
                                    <div class="card-body">
                                        <a href={`/teachers/update/${user.id}`} className="custom-size"><i class="fa-solid fa-file-circle-plus"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col mb-4">
                                <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                    <div class="card-header text-center">Change Password</div>
                                    <div class="card-body">
                                        <a href={`/teachers/changePassword/${user.id}`} className="custom-size"><i class="fa-solid fa-user-gear"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default TeacherHome;
