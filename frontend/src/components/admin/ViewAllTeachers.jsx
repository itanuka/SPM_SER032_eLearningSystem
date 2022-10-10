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
                              <button className="btn btn-warning p-1"
                                onClick={
                                  () => {
                                    navigate(`/teachers/update/${teacher._id}`)
                                  }
                                }>Update</button>
                            </td>
                            <td>
                              <button className="btn btn-danger p-1"
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
                                }}>Delete</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}