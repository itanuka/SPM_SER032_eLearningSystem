import { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode'

import { Link, useNavigate } from "react-router-dom";
import UserSideBar from '../layout/UserSideBar';
import '../style/studentHome.css'

function StudentHome() {

    const [user, setUser] = useState({});
    const [navigateLink, setNavigateLink] = useState("");

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
                    <UserSideBar />
                </div>

                <div className="col-10">
                    <div className="container">
                        <div class="row row-cols-1 row-cols-md-2 mt-5">

                            {user.groupID ?
                                <>
                                    <div class="col mb-4">
                                        <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                            <div class="card-header text-center">Go to my group</div>
                                            <div class="card-body">
                                                <a href="/student/group" className="custom-size"><i class="fa-solid fa-user-group"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div class="col mb-4">
                                        <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                            <div class="card-header text-center">My Courses</div>
                                            <div class="card-body">
                                                <a href="" className="custom-size"><i class="fa-sharp fa-solid fa-book-open-reader"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </>}




                            <div class="col mb-4">
                                <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                    <div class="card-header text-center">My Profile</div>
                                    <div class="card-body">
                                        <a href={navigateLink} className="custom-size"><i class="fa-solid fa-file-circle-plus"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col mb-4">
                                <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                    <div class="card-header text-center">Change Password</div>
                                    <div class="card-body">
                                        <a href="/student/changePassword" className="custom-size"><i class="fa-solid fa-user-gear"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col mb-4">
                                <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                    <div class="card-header text-center">Library</div>
                                    <div class="card-body">
                                        <a href="/library/UserviewAllBooks" className="custom-size"><i class="fa-solid fa-book"></i></a>
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

export default StudentHome;
