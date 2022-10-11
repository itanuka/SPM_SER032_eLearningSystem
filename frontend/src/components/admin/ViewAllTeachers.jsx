import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminSideBar from "../layout/AdminSideBar";

export const ViewAllTeachers = () => {
  let navigate = useNavigate();

  const [teachers, setTeachers] = useState([]);

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

  const deleteTeacher = async (id) => {
    await axios.delete(`http://localhost:4000/api/v1/teachers/${id}`);

    window.location = '/teachers';
  }

  useEffect(() => {
    getTeachers()
  }, []);

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
                <table className="table">
                  <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Contact No</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Qualifications</th>
                    <th>Update</th>
                    <th>Delete</th>
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
                            <td>
                              <button className="btn btn-outline-warning p-1"
                                onClick={
                                  () => {
                                    navigate(`/teachers/update/${teacher._id}`)
                                  }
                                }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">

                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />

                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />

                                </svg>
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-outline-danger p-1"
                                onClick={() => {
                                  Swal.fire({
                                    title: "Warning!",
                                    text: "Do you want to delete this teacher?",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonText: "Ok",
                                    confirmButtonColor: "#C81E1E",
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                      deleteTeacher(teacher._id);
                                    }
                                  })
                                }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">

                                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />

                                </svg></button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
                <button className="btn btn-primary"
                  onClick={() => navigate('/teachers/report')}
                >
                  Generate Teachers Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}