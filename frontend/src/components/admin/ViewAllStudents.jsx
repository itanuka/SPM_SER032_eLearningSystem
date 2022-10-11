import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const ViewAllStudents = () => {

  const [students, setStudents] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

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

  const filteredStudentList = students.filter((student) => {
    return student.email.toLowerCase().includes(searchKeyword.toLowerCase())
  })

  async function deleteStudent(id) {
    await axios.delete(`http://localhost:4000/api/v1/students/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    loadStudents();
  }, []);


  return (
    <div className='container'>
      <input placeholder='Search by email'
        onChange={(e) => {
          setSearchKeyword(e.target.value)
        }}
      />
      <table className='table table-hover my-3'>
        <thead className='thead-dark'>
          <th> First Name </th>
          <th> Last Name </th>
          <th> Gender </th>
          <th> DOB </th>
          <th> Contact No: </th>
          <th> Email </th>
          <th> Address </th>
          <th> Action </th>
          <th> </th>
        </thead>
        <tbody>
          {filteredStudentList.map(student => {
            return (
              <tr key={student._id}>
                <td> {student.firstName} </td>
                <td> {student.lastName} </td>
                <td> {student.gender} </td>
                <td> {student.dob} </td>
                <td> {student.contactNo} </td>
                <td> {student.email} </td>
                <td> {student.address} </td>
                <td>
                  <button className='btn btn-outline-warning'
                    onClick={() => {
                      navigate(`/students/update/${student._id}`)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">

                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />

                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />

                    </svg>
                  </button>
                </td>
                <td>
                  <button className='btn btn-outline-danger'
                    onClick={() => {
                      deleteStudent(student._id)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">

                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />

                    </svg>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}








