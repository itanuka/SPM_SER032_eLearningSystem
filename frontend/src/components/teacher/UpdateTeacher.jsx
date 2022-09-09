import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UserSideBar from "../layout/UserSideBar";
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"

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
    await Swal.fire({
      title: 'Update Successfully',
      icon: "success",
      showConfirmButton: false,
      timer: 1500
    })
    navigate("/teachers")

    setFirstName("");
    setLastName("");
    setGender("");
    setDob("");
    setContactNo("");
    setEmail("");
    setAddress("");
    setQualifications("");
  };

  function onChangeGender(event) {
    setGender(event.target.value);
    console.log(event.target.value);
  }


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
                            placeholder="Enter the first name here"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value) }}
                            required
                          />
                        </div>
                      </div><br />

                      <div className="form-row mt-2">
                        <div className="col">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter the last name here"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value) }}
                            required
                          />
                        </div>
                      </div><br />

                      <div className="form-row">
                        <div className="col mt-2" onChange={onChangeGender}>
                          <label htmlFor="gender">Gender</label><br />
                          <div class="form-check-inline">
                            <label class="form-check-label" for="radio1">
                              <input type="radio" class="form-check-input" id="radio1" name="gender" value="Male" checked={gender === "Male"} />
                              Male
                            </label>
                          </div>
                          <div class="form-check-inline">
                            <label class="form-check-label" for="radio2">
                              <input type="radio" class="form-check-input" id="radio2" name="gender" value="Female" checked={gender === "Female"} />
                              Female
                            </label>
                          </div>
                        </div>
                      </div><br />

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
                      </div><br />


                      <div className="form-row mt-2">
                        <div className="col">
                          <label htmlFor="contactNumber">Contact Number ( Format: +94 7x zzzzzzz )</label>
                          <PhoneInput
                            className="form-control"
                            pattern="\+94 7[0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9]"
                            title="contact number should follow required pattern"
                            placeholder="Enter the contact number here"
                            value={contactNo}
                            onChange={setContactNo}
                            required
                          />
                        </div>
                      </div><br />

                      <div className="form-row mt-2">
                        <div className="col">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter the email here"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                          />
                        </div>
                      </div><br />

                      <div className="form-row mt-2">
                        <div className="col">
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter the address here"
                            value={address}
                            onChange={(e) => { setAddress(e.target.value) }}
                            required
                          />
                        </div>
                      </div><br />

                      <div className="form-row mt-2">
                        <div className="col">
                          <label htmlFor="qualifications">Qualifications</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter the qualifications here"
                            value={qualifications}
                            onChange={(e) => { setQualifications(e.target.value) }}
                            required
                          />
                        </div>
                      </div><br />


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