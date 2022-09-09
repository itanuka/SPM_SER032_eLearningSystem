import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jwtDecode from 'jwt-decode'
import AdminSideBar from "../layout/AdminSideBar";
import '../style/adminHome.css'


function AdminHome() {

    //   const [user, setUser] = useState({});

    //   useEffect(() => {

    //     try {
    //       const jwt = localStorage.getItem("token");
    //       setUser(jwtDecode(jwt));
    //     } catch (error) {

    //     }
    //   }, []);

    const navigate = useNavigate();

    return (
        <div >

            <div className="row" style={{ maxWidth: "100%" }}>

                <div className="col-2" >
                    <AdminSideBar />
                </div>

                <div className="col-10">
                    <div className="container">
                        <div class="row row-cols-1 row-cols-md-2 mt-5">

                            <div class="col mb-4">
                                <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                    <div class="card-header text-center">Manage Students</div>
                                    <div class="card-body">
                                        <a href="" className="custom-size"> <i class="fa-solid fa-user-graduate"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col mb-4">
                                <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                    <div class="card-header text-center">Manage Teachers</div>
                                    <div class="card-body">
                                        <a href="" className="custom-size"><i class=" fas fa-users"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col mb-4">
                                <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                    <div class="card-header text-center">Add Books</div>
                                    <div class="card-body">
                                        <a href="/library/addBook" className="custom-size"><i class="fa-solid fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="col mb-4">
                                <div class="card text-white bg-dark mb-3" style={{ height: '240px', width: '400px' }}>
                                    <div class="card-header text-center">Library</div>
                                    <div class="card-body">
                                        <a href="/library/viewAllBooks" className="custom-size"><i class="fa-solid fa-book"></i></a>
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

export default AdminHome;
