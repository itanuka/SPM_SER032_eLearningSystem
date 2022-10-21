import React from 'react'
import {  useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"
import Swal from "sweetalert2";

function CourseMaterialTeacherView() {

    const[materials, setMaterials] = useState([])
    const {courseID} = useParams();
    const [errorMsg, setErrorMsg] = useState('');
    const[deleteCount, setDeleteCount] = useState(0);
    const [searchKeyword, setSearchKeyword] = useState("");
    const navigate = useNavigate();

    let filename = ""
    let size = 0

    async function getCourseMaterial() {
        await axios.get(`http://localhost:4000/api/v1/course_material/get_single_course_material_by_course/${courseID}`)
        .then(res=>{
            setMaterials(res.data);
        })
        .catch(err=>console.error(err))
    }
    
    async function deleteCourseMaterial(id) {
        await axios.delete(`http://localhost:4000/api/v1/course_material/delete_course_material/${id}`)
        .then(res=>{
            console.log(res.data);
            Swal.fire("Are you sure you want to delete course material?", "Click ok to Continue", "warning");
            setDeleteCount(deleteCount=>deleteCount+1)
            setErrorMsg('');
            
        })
        .catch(err=>{
            Swal.fire("Course material could not be deleted!!!", "Click ok to Continue", "error");
            setErrorMsg('');
        })
    }

    // setting the list of course material that matches with the search keyword
    const filteredCourseMaterialList = materials.filter((material) => {
        return material.course_name.toLowerCase().includes(searchKeyword.toLowerCase())
    })

    useEffect(()=>{
        getCourseMaterial()
    }, [deleteCount])
    
  return (
    <div className='container'>
        <input type="text" placeholder='Search by course name'
            onChange={(e)=>setSearchKeyword(e.target.value)}
        />
        <table className='table table-hover'>
            <thead className='thead-dark'>
                <th> Title </th>
                <th> Description </th>
                <th> Category </th>
                <th> File </th>
                <th> Action </th>
                <th> </th>
            </thead>
            <tbody>
                {filteredCourseMaterialList.map(material=>{
                    filename = material.file_path
                    size = filename.length
                    filename = filename.substring(57, size)
                return(
                    <tr key= { material._id }>
                        <td> { material.title } </td>
                        <td> { material.description } </td>
                        <td> { material.category } </td>
                        <td> { filename } </td>
                        <td>
                            <button className='btn btn-outline-primary'
                                onClick={()=>navigate(`/teachers/updateCourseMaterial/${material._id}`)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            </button>
                        </td>
                        <td>
                            <button className='btn btn-outline-danger' onClick={()=> {
                                deleteCourseMaterial(material._id)
                            }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
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

export default CourseMaterialTeacherView
