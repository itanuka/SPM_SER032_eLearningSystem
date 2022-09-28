import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function UpdateCourseMaterial() {
    const { courseMaterialID } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [courseID, setCourseID] = useState("");

    const role = "teacher";

  const handleSubmit = async (e) => {
      e.preventDefault();

      const data = new FormData();
      data.append("title", title);
      data.append("description", description);
      data.append("category", category);
      data.append("courseID", courseID);
    //   data.append("material", file);


      await axios.put(`http://localhost:4000/api/v1/course_material/update_course_material/${courseMaterialID}`, data)
          .then((res) => {
              console.log(res);
          })
          .catch((err) => { console.error(err) })

      Swal.fire({
          title: 'Material was updated successfully',
          icon: "success",
          showConfirmButton: false,
          timer: 1500
      })

      navigate(`/teachers/viewCourses`);
  };


  return (
    <div className='container-fluid bg-light'>
        <form class="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
            <div className='col-md-2'></div>
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">Title</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="Title" value={title}
                 required onChange={(e)=>setTitle(e.target.value)}/>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom04" class="form-label">Extension</label>
                <br />
                <select class="form-select col-md" style={{height: "38px"}} id="validationCustom04" required>
                <option selected disabled value="">Choose an extension</option>
                <option>.doc</option>
                <option>.docx</option>
                <option>.jpeg</option>
                <option>.jpg</option>
                <option>.pdf</option>
                <option>.png</option>
                <option>.xls</option>
                <option>.xlsx</option>
                </select>
                <div class="invalid-feedback">
                Please select a valid extension.
                </div>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-2'></div>
            <div className="col-md-8">
                <label for="validationCustom02" class="form-label">Description</label>
                <textarea type="text" className="form-control" id="validationCustom02" rows="10" placeholder='Description'
                 value={description}
                 required onChange={(e)=>setDescription(e.target.value)} />
                <div class="invalid-feedback">
                Please give a description!
                </div>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            {/* <div className='col-md'></div>
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
                <input type="file" className="form-control" aria-label="file example" required onChange={(e)=>setFile(e.target.files[0])}/>
                <div class="invalid-feedback">Please select a file!</div>
            </div> */}
            <div className='col-md-12'></div>
            <div className='col-md-2 mx-2'></div>
            <button class="btn btn-primary my-4" type="submit">Update</button>
            </form>
    </div>
  )
}

export default UpdateCourseMaterial