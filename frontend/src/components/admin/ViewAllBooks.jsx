import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminSideBar from "../layout/AdminSideBar";

function ViewAllBooks() {
    let navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    const filteredBooks = books.filter(book => {
        return book.isbn.toLowerCase().includes(searchKeyword.toLowerCase())
    })

    const loadBooks = async () => {
        await axios.get("http://localhost:4000/api/v1/books/getAllBooks")
            .then((res) => {
                setBooks(res.data);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:4000/api/v1/books/deleteBook/${id}`);

        window.location = '/library/viewAllBooks';
    }

    useEffect(() => {
        loadBooks()
    }, []);

    return (
        <div>
            <div className="row" style={{ maxWidth: "100%" }}>
                <div className="col-md-2">
                    <AdminSideBar />
                </div>
                <div className="col-md-10">
                    <div className="container" style={{ height: "60px" }}></div>
                    <div className="container">
                        <h1 className="text-center">View All Books</h1>
                    </div>
                    <div className="container mt-5">
                        <div className="row mt-3">
                            <div className="col-md-5"></div>
                            <div className="col-md-4"></div>
                            <div className="col-md-3">
                                <input type="text" name="" id="" placeholder="Search" style={{ width: "200px" }}
                                className = "ml-5"
                                    onChange={e => setSearchKeyword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md">
                                <table className="table">
                                    <thead>
                                        {/* <th>Id</th> */}
                                        <th>Title</th>
                                        <th>ISBN</th>
                                        <th>Author</th>
                                        <th>PublishDate</th>
                                        <th>Publisher</th>
                                        <th>Pages</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </thead>
                                    <tbody>
                                        {
                                            filteredBooks.map((book) => {
                                                return (
                                                    <tr>
                                                        {/* <td>{book._id}</td> */}
                                                        <td>{book.title}</td>
                                                        <td>{book.isbn}</td>
                                                        <td>{book.author}</td>
                                                        <td>{book.publishDate}</td>
                                                        <td>{book.publisher}</td>
                                                        <td>{book.pages}</td>
                                                        <td>{book.category}</td>
                                                        <td>{book.description}</td>
                                                        <td>
                                                            <button className="btn btn-warning p-1"
                                                                onClick={
                                                                    () => {
                                                                        navigate(`/library/viewAllBooks/updateBookDetails/${book._id}`)
                                                                    }
                                                                }>Update</button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-danger p-1"
                                                                onClick={() => {
                                                                    Swal.fire({
                                                                        title: "Warning!",
                                                                        text: "Do you want to delete this book?",
                                                                        icon: "warning",
                                                                        showCancelButton: true,
                                                                        confirmButtonText: "Ok",
                                                                        confirmButtonColor: "#C81E1E",
                                                                    }).then((result) => {
                                                                        if (result.isConfirmed) {
                                                                            deleteBook(book._id);
                                                                        }
                                                                    })
                                                                }}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                {/* <button className="btn btn-submit" onClick={navigate(`/book_report`)}>Generate Book Report</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllBooks;