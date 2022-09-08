import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UserSideBar from "../layout/UserSideBar";

export const UpdateTeacher = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [qualifications, setQualifications] = useState("");

  const paramID = useParams("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();



    const newTeacher = {
      firstName,
      lastName,
      gender,
      dob,
      contactNo,
      email,
      address,
      qualifications
    };


    await axios.put('http://localhost:4000/api/v1/teachers/' + paramID.id,
      newTeacher)
      .then((res) => {
        console.log(res);
        console.log("Teacher Updated!!");



      }).catch((error) => {
        alert(error);
      });
    Swal.fire({
      title: 'Update Successfully',
      icon: "success",
      showConfirmButton: false,
      timer: 1500
    })
    navigate("/")

    setFirstName("");
    setLastName("");
    setGender("");
    setDob("");
    setContactNo("");
    setEmail("");
    setAddress("");
    setQualifications("");
    // setPassword("");
    // setConfirmPassword("");
  };


  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/teachers/" + paramID.id)
      .then((res) => {
        console.log(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setGender(res.data.gender);
        setDob(res.data.dob);
        setContactNo(res.data.contactNo);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setQualifications(res.data.qualifications);
        // setPassword(res.data.password);
        // setConfirmPassword(res.data.password);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <UserSideBar />
        </div>
        <div className="col-md-10">
          <div className="container" style={{ height: "60px" }}></div>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                    <h2 class="mb-4 text-center">Update Teacher Details</h2>

                    <form action="" onSubmit={handleSubmit}>

                      <div className="form-row">
                        <div className="col">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="first name"
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
                            placeholder="last name"
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
                            placeholder="07x-xxxxxxx"
                            pattern="[0-9]{3}-[0-9]{7}"
                            title="contact number should follow required pattern"
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
                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            // title="Enter Valid E-mail address"
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
                            placeholder="address"
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-row mt-2">
                        <div className="col">
                          <label htmlFor="qualifications">Qualifications</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="qualifications"
                            value={qualifications}
                            onChange={(e) => { setQualifications(e.target.value) }}
                            required
                          />
                        </div>
                      </div>

                      {/* 
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
                    </div> */}

                      <button type="submit" class="btn btn-primary mt-4" style={{ width: '100%', height: '40px' }}>
                        Update Details
                      </button>

                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}