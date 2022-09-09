import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };

    const response = await axios.post(
      "http://localhost:4000/api/v1/login/",
      loginData
    );

    console.log(response);
    const data = response.data;

    if (data.token) {
      localStorage.setItem("token", data.token);


      if (data.role === "Student") {
        Swal.fire({
          title: 'Login Successfully',
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        }).then((value) => {
          Swal.fire((window.location = "/"));
        });

      } else if (data.role === "Teacher") {
        Swal.fire({
          title: 'Login Successfully',
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        }).then((value) => {
          Swal.fire((window.location = "/teacherHome"));
        });
        // navigate("/supervisor");

      } else if (data.role === "Admin") {
        Swal.fire({
          title: 'Login Successfully',
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        }).then((value) => {
          Swal.fire((window.location = "/adminHome"));
        });


      } else {
        console.log("user type err");
      }
    } else if (data.status === "no_user") {
      Swal.fire({
        title: "User does not exists!!",
        text: "Please create an account",
        icon: "error",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          setEmail("");
          setPassword("");
        }
      });
    } else {
      Swal.fire({
        title: "Incorrect Password!!",
        text: "Please enter your password again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setPassword("");
    }
  };

  return (
    <div>
      <div className="container" style={{ height: "100px" }}></div>
      <div className="container" style={{ marginBottom: "341px" }}>
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6" >
            <div className="card" style={{ backgroundColor: '#b3e6ff', marginTop: "60px", height: "400px", width: "500px" }}>
              <div className="card-body" >
                <h2 class="mb-4 text-center">Sign In</h2>

                <form onSubmit={loginUser}>

                  <div className="form-row mt-5">
                    <div className="col-md-2">
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row mt-4">
                    <div className="col-md-2">
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-md-10">
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" class="btn btn-primary mt-5" style={{ height: '40px', width: '40%' }}>
                      Sign In
                    </button>
                  </div>



                </form>

                <div className="row mt-3">

                  <div className="col text-center">
                    <span>No Account ? </span>
                    <span><Link to="/registerStudent" style={{ color: '', textDecoration: 'none' }}>Create Account</Link> </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

    </div>
  );
}