import React from 'react'
import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Swal from "sweetalert2";
import download from 'downloadjs';

function ViewCourseMaterial() {

  const[materials, setMaterials] = useState([])
  const {courseID} = useParams();
  const [errorMsg, setErrorMsg] = useState('');

  async function getCourseMaterial() {
    await axios.get(`http://localhost:4000/api/v1/course_material/get_single_course_material_by_course/${courseID}`)
    .then(res=>{setMaterials(res.data); console.log(res.data)})
    .catch(err=>console.error(err))
  }

  const downloadFile = async (id, path, mimetype) => {
    try {
        const result = await axios.get(`http://localhost:4000/api/v1/course_material/download/course_material/${id}`, {
            responseType: 'blob'
        });
        const split = path.split('/');
        const filename = split[split.length - 1];

        Swal.fire("Download Successful!!", "Click ok to Continue", "success");
        setErrorMsg('');

        return download(result.data, filename, mimetype);
    } catch (error) {
        if (error.response && error.response.status === 400) {
            //setErrorMsg('Error while downloading file. Try again later');
            Swal.fire("Error while downloading file. Try again later!!", "Click ok to Continue", "error");
        }
    }
  };

  useEffect(()=>{
    getCourseMaterial()
  }, [])

  return (
    <div className='container'>
        <table className='table table-hover'>
          <thead className='thead-dark'>
            <th> Title </th>
            <th> Description </th>
            <th> Category </th>
            <th> File </th>
            <th>  </th>
          </thead>
          <tbody>
            {materials.map(material=>{
              return(
                <tr key= { material._id }>
                  <td> { material.title } </td>
                  <td> { material.description } </td>
                  <td> { material.category } </td>
                  <td> { material.file_path } </td>
                  <td>
                    <button className='btn btn-outline-primary'
                    onClick={() => 
                      downloadFile(material._id, material.file_path, material.file_mimetype)
                    }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-download-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
  )
}

export default ViewCourseMaterial
