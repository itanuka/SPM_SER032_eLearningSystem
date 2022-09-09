
import React, { Fragment, useEffect, useContext } from 'react'
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode'
import '../style/header.css'
import '../style/header2.css'
import Swal from 'sweetalert2';
import { UserContext } from '../../UserContext';




function Header() {

    const { user } = useContext(UserContext);
    const [filePath, setFilePath] = useState();


    function logout() {
        localStorage.clear();
        Swal.fire({
            title: 'Logged Out Successfully',
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then((value) => {
            Swal.fire((window.location = "/"));
        });
    }

    async function getUserDetails() {
        if (user.role == "Student" || user.role == "Admin") {
            axios.get(`http://localhost:4000/api/v1/students/${user.id}`)
                .then((res) => {

                    setFilePath(res.data.file_path.substring(27));
                    console.log(res.data);
                })
                .catch(err => console.error(err))
        }

        else if (user.role == "Teacher") {
            axios.get(`http://localhost:4000/api/v1/teachers/${user.id}`)
                .then((res) => {

                    setFilePath(res.data.file_path.substring(27));
                    console.log(res.data);
                })
                .catch(err => console.error(err))
        }

    }

    useEffect(() => {
        if (user) {
            getUserDetails()
        }
    }, [])


    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark " style={{ background: '#232f3e' }}>
                    <a class="navbar-brand" href="#">E-Learning System</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-center mr-5" id="navbarSupportedContent">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <Link class="nav-link" to="/course/ViewAllCourses">Courses</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="">Library</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="">Contact Us</Link>
                            </li>
                            <li class="nav-item">

                                {user &&
                                    <Link class="nav-link" to="" style={{ textDecoration: 'none' }}>{user.email}</Link>
                                }

                            </li>






                            {/* {user ?
                                <>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="#">{user.email}</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="#" onClick={logout}>Log Out</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/registerStudent">Sign Up</Link>
                                    </li>
                                </>} */}



                        </ul>

                        <form class="form-inline my-2 my-lg-0 ">

                            {user ? (
                                <div className="ml-4 dropdown d-inline ">
                                    {filePath && <Link to="#!" className="btn dropdown-toggle text-white " type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <figure className="avatar avatar-nav">
                                            <img
                                                // src={user.avatar && user.avatar.url}
                                                src={`/uploads/${filePath}`}
                                                className="rounded-circle "
                                            />
                                        </figure>
                                        <span></span>
                                    </Link>}


                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropDownMenuButton">

                                        {user && user.role === 'admin' && (
                                            <Link className="dropdown-item" to="/admin/Dashboard">Dashboard</Link>
                                        )}
                                        {user.role !== 'admin' && (
                                            <Link className="dropdown-item" to="/listbill/" >My Payments</Link>
                                        )}


                                        <Link className="dropdown-item" to="/me">Profile</Link>

                                        <Link className="dropdown-item text-danger" to="/" onClick={logout}>
                                            Logout
                                        </Link>
                                    </div>

                                </div>
                            ) : <div style={{ marginRight: "-30em", marginLeft: "30em" }} > <button type="button" class="btn btn-primary"><a class="text-light" href="/login" style={{ textDecoration: 'none' }} >Sign In</a></button>
                                {/* <button type="button" class="btn btn-primary"><a class="text-light" href="/registerStudent" style={{ textDecoration: 'none' }} >Create an Account</a></button> */}
                            </div>

                            }
                        </form>
                    </div>
                </nav>
            </header>

        </div>
    );
}



export default Header;