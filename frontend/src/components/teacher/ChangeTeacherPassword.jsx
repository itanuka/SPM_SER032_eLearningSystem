import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export const ChangeTeacherPassword = () => {

    const [password, setPassword] = useState("");

    const paramID = useParams("");

    const changePassword = async (e) => {

        e.preventDefault();
        const requestBody = {
            password
        };

        await axios.patch(`http://localhost:4000/api/v1/teachers/teacherChangePassword/${paramID.id}`, requestBody);
        localStorage.clear();

        Swal.fire({
            title: 'Update Successfully',
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        }).then((value) => {
            Swal.fire((window.location = "/"));
        });



    }

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    {/* <TeacherSidebar /> */}
                </div>
                <div className='col-10'>
                    <div className="row" style={{ height: "80px" }}></div>
                    <div class="container body ">
                        <div class="row mt-5 mb-5">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <div class="card ">
                                    <div class="card-body">
                                        <h2 class="mb-4 text-center">Change Password</h2>

                                        <form onSubmit={changePassword} >
                                            <div class="form-group ">
                                                <label for="password">New Password</label>
                                                <input type="password"
                                                    class="form-control"
                                                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                    id="password"
                                                    // value={userID}
                                                    name="password"
                                                    onChange={(e) => {
                                                        setPassword(e.target.value);
                                                    }}
                                                    required
                                                    aria-describedby="userHelp" />

                                            </div>
                                            <div class="form-group">
                                                <label for="confirmPassword">Confirm Password</label>
                                                <input type="password"
                                                    class="form-control"
                                                    required
                                                    // value={password}
                                                    name="confirmPassword"
                                                // onChange={(e) => {
                                                //     setPassword(e.target.value);
                                                // }}
                                                />
                                            </div>

                                            <button type="submit" class="btn btn-primary custom-btn-signIn" >UPDATE PASSWORD</button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3"></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}