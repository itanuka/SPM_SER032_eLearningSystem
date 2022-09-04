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
import AddBook from "./components/admin/AddBook";
import ViewAllBooks from "./components/admin/ViewAllBooks";
import UpdateBook from "./components/admin/UpdateBook";
import UserViewAllBooks from "./components/UserViewAllBooks";
import UserViewBook from "./components/UserViewBook";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
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
          <Route path="/library/addBook" element = {<AddBook/>}></Route>
          <Route path="/library/viewAllBooks" element = {<ViewAllBooks/>}></Route>
          <Route path="/library/viewAllBooks/updateBookDetails/:id" element = {<UpdateBook/>}></Route>
          <Route path="/library/UserviewAllBooks" element = {<UserViewAllBooks/>}></Route>
          <Route path="/library/UserViewAllBooks/getBookDetails/:id" element = {<UserViewBook/>}></Route>
          
          {/* Libarary-management */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
