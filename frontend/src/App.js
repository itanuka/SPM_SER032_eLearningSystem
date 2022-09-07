import React, { useState } from "react";
import jwtDecode from 'jwt-decode'
import { Routes, BrowserRouter, Route } from "react-router-dom";


import { RegisterStudent } from './components/student/RegisterStudent'
import { Login } from './components/Login'
import { UpdateStudent } from './components/student/UpdateStudent'
import { RegisterTeacher } from './components/admin/RegisterTeacher'
import { UpdateTeacher } from './components/teacher/UpdateTeacher'
import { ViewAllStudents } from './components/admin/ViewAllStudents'
import { ViewAllTeachers } from './components/admin/ViewAllTeachers'
import { ChangeStudentPassword } from './components/student/ChangeStudentPassword'
import { ChangeTeacherPassword } from './components/teacher/ChangeTeacherPassword'
import { UserContext } from "./UserContext";
import AddBook from "./components/admin/AddBook";
import ViewAllBooks from "./components/admin/ViewAllBooks";
import UpdateBook from "./components/admin/UpdateBook";
import UserViewAllBooks from "./components/UserViewAllBooks";
import UserViewBook from "./components/UserViewBook";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AdminHome from "./components/admin/AdminHome";
import StudentHome from "./components/student/StudentHome";
import TeacherHome from "./components/teacher/TeacherHome";




const App = () => {

  const [user, setUser] = useState(null);
  let token;

  if (!user) {
    try {
      const jwt = localStorage.getItem("token");
      token = jwt
      const loggedInUser = jwtDecode(jwt);
      setUser(loggedInUser);
    } catch (error) {

    }
  }

  if (user) {
    token = localStorage.getItem("token");
  }

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser, token }} >
          <Header />
          <Routes>
          <Route path="/adminHome" element={<AdminHome />}></Route>
          <Route path="/studentHome" element={<StudentHome />}></Route>
          <Route path="/teacherHome" element={<TeacherHome />}></Route>

            <Route path="/registerStudent" element={<RegisterStudent />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/students/update/:id" element={<UpdateStudent />}></Route>
            <Route path="/registerTeacher" element={<RegisterTeacher />}></Route>
            <Route path="/teachers/update/:id" element={<UpdateTeacher />}></Route>
            <Route path="/students" element={<ViewAllStudents />}></Route>
            <Route path="/teachers" element={<ViewAllTeachers />}></Route>
            <Route path="/students/changePassword/:id" element={<ChangeStudentPassword />}></Route>
            <Route path="/teachers/changePassword/:id" element={<ChangeTeacherPassword />}></Route>

            {/* Libarary-management */}
            <Route path="/library/addBook" element={<AddBook />}></Route>
            <Route path="/library/viewAllBooks" element={<ViewAllBooks />}></Route>
            <Route path="/library/viewAllBooks/updateBookDetails/:id" element={<UpdateBook />}></Route>
            <Route path="/library/UserviewAllBooks" element={<UserViewAllBooks />}></Route>
            <Route path="/library/UserViewAllBooks/getBookDetails/:id" element={<UserViewBook />}></Route>

            {/* Libarary-management */}
          </Routes>
          <Footer />
        </UserContext.Provider >
      </BrowserRouter>

    </div>
  );
}

export default App;
