import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const RegisterStudent = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password == confirmPassword) {

      const data = new FormData();

      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("gender", gender);
      data.append("dob", dob);
      data.append("contactNo", contactNo);
      data.append("email", email);
      data.append("address", address);
      data.append("password", password);
      data.append("file", file);


      try {
        const res = await axios.post('http://localhost:4000/api/v1/students/', data);


        await Swal.fire({
          title: 'Registered Successfully',
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });

        // navigate('/')

        window.location = "/";

      } catch (error) {
        alert(error);
      }


    }

    else {
      Swal.fire({
        title: "Passowrds Not Matched!!",
        text: "Please enter your details correctly...",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }


  return (
    <div>
      <div className="container" style={{ height: "60px" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 class="mb-4 text-center">Create an Account</h2>

                <form
                  onSubmit={handleSubmit}>

                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value) }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value) }}
                        required
                      />
                    </div>
                  </div>


                  <div className="form-row">
                    <div className="col mt-2">
                      <label htmlFor="firstName">Gender</label><br />
                      <div class="form-check-inline">
                        <label class="form-check-label" for="radio1">
                          <input type="radio" class="form-check-input" id="radio1" name="gender" value="Male" checked onChange={(e) => { setGender(e.target.value) }} />
                          Male
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <label class="form-check-label" for="radio2">
                          <input type="radio" class="form-check-input" id="radio2" name="gender" value="Female" onChange={(e) => { setGender(e.target.value) }} />
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col">
                      <label htmlFor="birthday">Birthday</label>
                      <input
                        type="date"
                        className="form-control"
                        value={dob}
                        onChange={(e) => { setDob(e.target.value) }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col">
                      <label htmlFor="contactNumber">Contact Number</label>
                      <input
                        type="text"
                        className="form-control"
                        value={contactNo}
                        onChange={(e) => { setContactNo(e.target.value) }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => { setAddress(e.target.value) }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col">
                      <label htmlFor="password">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value) }}
                        required
                      />
                    </div>
                  </div><br />

                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputFile">Profile Picture</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={e => { setFile(e.target.files[0]) }}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary mt-4" style={{ width: '100%', height: '40px' }}>
                    Create Account
                  </button>

                </form>
              </div>
            </div>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}