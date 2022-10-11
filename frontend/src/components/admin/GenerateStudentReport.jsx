import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Swal from "sweetalert2";
import jsPdf from 'jspdf';
import 'jspdf-autotable';

function GenerateStudentReport() {
    const [students, setStudents] = useState([]);

    const loadStudents = async () => {
        await axios.get("http://localhost:4000/api/v1/students/")
            .then((res) => {
                setStudents(res.data);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadStudents();
    }, []);

    function jsPdfGenerator() {

        const doc = new jsPdf('l', 'pt', 'a3');

        doc.text(600, 20, 'Student Report', { align: 'center' },);

        doc.autoTable({ html: '#StudentList-table' })

        doc.autoTable({

            columnStyles: { europe: { halign: 'StudentsPdf' } },

            margin: { top: 10 },

        })

        //save the pdf
        doc.save("Student List.pdf");

    }


    return (
        <div className='container'>
            <button className='btn btn-primary my-2'
                onClick={jsPdfGenerator}
            >
                Generate Report
            </button>
            <table id='StudentList-table' className='table table-hover'>
                <thead className='thead-dark'>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Gender </th>
                    <th> DOB </th>
                    <th> Contact No: </th>
                    <th> Email </th>
                    <th> Address </th>
                </thead>
                <tbody>
                    {students.map(student => {
                        return (
                            <tr key={student._id}>
                                <td> {student.firstName} </td>
                                <td> {student.lastName} </td>
                                <td> {student.gender} </td>
                                <td> {student.dob} </td>
                                <td> {student.contactNo} </td>
                                <td> {student.email} </td>
                                <td> {student.address} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GenerateStudentReport