import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminSideBar from "../layout/AdminSideBar";

import jsPdf from "jspdf"
import jsPdfAutoTable from "jspdf-autotable"

function GenerateBookReport() {
    let navigate = useNavigate();

    const [books, setBooks] = useState([]);

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

    function jsPdfGenerator() {
        const doc = new jsPdf('l', 'pt', 'a3')
        doc.text(600, 20, 'Book Report', { align: "center" })
        doc.autoTable({ html: '#book-table' })
        doc.autoTable({
            columnStyles: {
                europe: { halign: 'BookDetailsReport' },
                margin: { top: 10 }
            }
        })

        doc.save("Book Details.pdf")
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
                        <div className="row">
                            <div className="col-md">
                                <table className="table" id="book-table">
                                    <thead>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>ISBN</th>
                                        <th>Author</th>
                                        <th>PublishDate</th>
                                        <th>Publisher</th>
                                        <th>Pages</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                    </thead>
                                    <tbody>
                                        {
                                            books.map((book) => {
                                                return (
                                                    <tr>
                                                        <td>{book._id}</td>
                                                        <td>{book.title}</td>
                                                        <td>{book.isbn}</td>
                                                        <td>{book.author}</td>
                                                        <td>{book.publishDate}</td>
                                                        <td>{book.publisher}</td>
                                                        <td>{book.pages}</td>
                                                        <td>{book.category}</td>
                                                        <td>{book.description}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5"></div>
                            <div className="col-md-5"></div>
                            <div className="col-md-2">
                                <button className="btn btn-primary" onClick={jsPdfGenerator}>Generate Report</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GenerateBookReport;