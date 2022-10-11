import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Swal from "sweetalert2";
import jsPdf from 'jspdf';
import 'jspdf-autotable';
import AdminSideBar from '../layout/AdminSideBar';

function GenerateTeachersReport() {
    const [teachers, setTeachers] = useState([]);
    const navigate = useNavigate();

    const getTeachers = async () => {
        await axios.get("http://localhost:4000/api/v1/teachers")
            .then((res) => {
                setTeachers(res.data);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getTeachers();
    }, []);

    function jsPdfGenerator() {

        const doc = new jsPdf('l', 'pt', 'a3');

        doc.text(600, 20, 'Teacher Report', { align: 'center' },);

        doc.autoTable({ html: '#TeacherList-table' })

        doc.autoTable({

            columnStyles: { europe: { halign: 'TeachersPdf' } },

            margin: { top: 10 },

        })

        //save the pdf
        doc.save("Teacher List.pdf");

    }

    return (
        <div>
            <div className="row" style={{ maxWidth: "100%" }}>
                <div className="col-md-2">
                    <AdminSideBar />
                </div>
                <div className="col-md-10">
                    <div className="container" style={{ height: "60px" }}></div>
                    <div className="container">
                        <button type="button" class="btn btn-primary" onClick={() => navigate('/registerTeacher')}>Add New Teacher</button>
                        <h1 className="text-center">View All Teachers</h1>
                    </div>
                    <div className="container mt-5">
                        <div className="row">

                            <div className="col-md">
                                <table className="table" id="TeacherList-table">
                                    <thead>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Gender</th>
                                        <th>DOB</th>
                                        <th>Contact No</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Qualifications</th>
                                    </thead>
                                    <tbody>
                                        {
                                            teachers.map((teacher) => {
                                                return (
                                                    <tr>
                                                        <td>{teacher.firstName}</td>
                                                        <td>{teacher.lastName}</td>
                                                        <td>{teacher.gender}</td>
                                                        <td>{teacher.dob}</td>
                                                        <td>{teacher.contactNo}</td>
                                                        <td>{teacher.email}</td>
                                                        <td>{teacher.address}</td>
                                                        <td>{teacher.qualifications}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <button className='btn btn-primary'
                                    onClick={jsPdfGenerator}
                                >
                                    Generate Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GenerateTeachersReport