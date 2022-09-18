import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SingleEnrolledCourse from './SingleEnrolledCourse'
// import UserSideBar from "../layout/UserSideBar"

function ViewEnrolledCourses() {

    const[enrolledList, setEnrolledList] = useState([])
    const[unenrolledCount, setUnenrolledCount] = useState(0)

    // creating a dynamic enrolled item object
    let enrolledCourse = {}
    
    async function getAllEnrolledCourses() {
        axios.get("http://localhost:4000/api/v1/enrolle/allEnrolled")
        .then(res=>{setEnrolledList(res.data); console.log(res.data)})
        .catch(err=>console.error(err))
    }

    // async function getEnrolledCourseDetails(course) {
    //     axios.get(`http://localhost:4000/api/v1/courses/getSingleCourse/${course}`)
   
    useEffect(()=>{
        getAllEnrolledCourses()
    }, [unenrolledCount])

    // {
    //     enrolledList.map(item=>{

    //     })
    // }

  return (
    <div>
        <div className="container">
            <h1 className='text-center'>Enrolled Courses</h1>
        </div>
        {/* <div className="col-md-2">
          <UserSideBar />
        </div> */}
        {
            enrolledList.map(item=>{
                return(
                    <SingleEnrolledCourse id = {item.enrolledItems[0].course} id2= {item._id} counter={setUnenrolledCount} count={unenrolledCount}/>
                )
            })
        }
    </div>
  )
}

export default ViewEnrolledCourses