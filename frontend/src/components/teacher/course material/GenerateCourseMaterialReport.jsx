import React from 'react'
import {  useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Swal from "sweetalert2";
import jsPdf from 'jspdf';
import 'jspdf-autotable';

function GenerateCourseMaterialReport() {

    const[materials, setMaterials] = useState([])
    const {courseID} = useParams();
    const [errorMsg, setErrorMsg] = useState('');

    let filename = ""
    let size = 0

    async function getCourseMaterial() {
        await axios.get(`http://localhost:4000/api/v1/course_material/get_single_course_material_by_course/${courseID}`)
        .then(res=>{
            setMaterials(res.data);
        })
        .catch(err=>console.error(err))
    }

    useEffect(()=>{
        getCourseMaterial()
    }, [])


    function jsPdfGenerator()  {
    
        const doc = new jsPdf('l', 'pt', 'a3');
    
        doc.text(600, 20, 'Course Material Report', { align: 'center' },);
    
        doc.autoTable({ html: '#CourseMaterial-table' })
    
        doc.autoTable({
    
          columnStyles: { europe: { halign: 'CourseMaterialsPdf' } },
    
          margin: { top: 10 },
    
        })
    
        //save the pdf
        doc.save("Course Materials.pdf");
    
    }


  return (
    <div className='container'>
        <table id='CourseMaterial-table' className='table table-hover'>
            <thead className='thead-dark'>
                <th> Title </th>
                <th> Description </th>
                <th> Category </th>
                <th> File </th>
            </thead>
            <tbody>
                {materials.map(material=>{
                    filename = material.file_path
                    size = filename.length
                    filename = filename.substring(57, size)
                return(
                    <tr key= { material._id }>
                        <td> { material.title } </td>
                        <td> { material.description } </td>
                        <td> { material.category } </td>
                        <td> { filename } </td>
                    </tr>
                )
                })}
            </tbody>
        </table>
        <button className="btn btn-outline-primary" onClick ={jsPdfGenerator}> Generate Report PDF</button>
    </div>
  )
}

export default GenerateCourseMaterialReport
