import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function AddCourse() {
    const[course_name, setCourseName] = useState("")
    const[author_name, setAuthorName] = useState("")
    const[description, setDescription] = useState("")
    const[category, setCategory] = useState("")
    const[image, setImage] = useState()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
  
        const data = new FormData();
        data.append("course_name", course_name);
        data.append("author_name", author_name);
        data.append("description", description);
        data.append("category", category);
        data.append("image", image);
  
  
        await axios.post('http://localhost:4000/api/v1/course/new_course', data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => { console.error(err) })
  
        Swal.fire({
            title: 'Course was added successfully',
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        })
  
        navigate(`/teachers/viewCourses/`);
    };


    
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function validated () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



  return (
    <div className='container-fluid bg-light'>
        <form class="g-3 needs-validation" noValidate onSubmit={handleSubmit}>
            <div className='row col-md-2' style={{backgroundColor:"#232f3e"}}></div>
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">Course Name</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="Name" onChange={(e)=>setCourseName(e.target.value)} required/>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-2'></div>

            {/* Adjust from here */}
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">Course Name</label>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Name" onChange={(e)=>setCourseName(e.target.value)} required/>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-2'></div>


            <div className="col-md-8">
                <label for="validationCustom03" class="form-label">Description</label>
                <textarea type="text" className="form-control" id="validationCustom03" rows="10" placeholder='Description' required onChange={(e)=>setDescription(e.target.value)} />
                <div class="invalid-feedback">
                Please give a description!
                </div>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div className='col-md'></div>
            <div className="col-md-2"></div>
            
            <div class="col-md-4 mt-2">
                <label for="validationCustom04" class="form-label">Category</label>
                <br />
                <select class="form-select col-md" style={{height: "38px"}} id="validationCustom05" required onChange={(e)=>setCategory(e.target.value)}>
                <option selected disabled value="">Choose a category</option>
                <option>Basic Web Development</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Fullstack Web Development</option>
                <option>Machine Learning</option>
                </select>
                <div class="invalid-feedback">
                Please select a valid category!
                </div>
            </div>

            <div className='col-md'></div>
            <div className='row col-md-12'></div>
            <div className='col-md-2'></div>
            <div className='col-md-9'></div>
            <div className="mt-3  mx-1 col-md-3"></div>
            <div className='col-md-12'></div>
            <div className='col-md-2'></div>

            <div class="mb-3 mx-3">
                <input type="file" className="form-control" aria-label="file example" required onChange={(e)=>setImage(e.target.files[0])}/>
                <div class="invalid-feedback">Please select an image!</div>
            </div>
            <div className='col-md-12'></div>
            <div className='col-md-2 mx-2'></div>
            <button class="btn btn-primary my-4" type="submit">Upload</button>
            </form>
    </div>
  )
}

export default AddCourse
