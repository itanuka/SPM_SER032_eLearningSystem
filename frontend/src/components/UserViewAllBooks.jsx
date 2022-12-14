import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserSideBar from "./layout/UserSideBar";


function UserViewAllBooks() {
    let navigate = useNavigate();

    const [books, setBooks] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");

    const loadBooks = async () => {
        await axios.get("http://localhost:4000/api/v1/books/getAllBooks")
            .then((res) => {
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadBooks()
    }, []);

    const fiteredBookList = books.filter(book => book.title.toLowerCase().includes(searchKeyword.toLowerCase()))

    return (
        <div>

            <div className="row" style={{ maxWidth: "100%" }}>
                <div className="col-md-2">
                    <UserSideBar />
                </div>
                <div className="col-md-10">
                    <div className="container" style={{ height: "60px" }}></div>
                    <div className="container">
                        <h1 className="text-center">Digital Library</h1>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-5"></div>
                            <div className="col-md-4"></div>
                            <div className="col-md-3">
                                <input type="text" placeholder="Search by book title"
                                    style={{ width: "200px" }}
                                    className="ml-5"
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div class="row row-cols-1 row-cols-md-3 mt-4">
                            {
                                fiteredBookList.map((book) => {

                                    let link = `/uploads/${book.cover_file_path.substring(27)}`
                                    return (
                                        <div >
                                            {
                                                <div class="col mb-4">
                                                    <div class="card h-100" >

                                                        <img src={link}
                                                            className="card-img-top" alt="..."
                                                        // style={{width:"300px", height:"220px"}}
                                                        />


                                                        <div class="card-body">
                                                            <h5 class="card-title">{book.title}</h5>
                                                            <h5 class="card-title">ISBN: {book.isbn}</h5>
                                                            <h6 class="card-text">Author: {book.author}</h6>
                                                            <h6 class="card-text">Publish Date: {book.publishDate}</h6>
                                                            <button
                                                                onClick={
                                                                    () => {
                                                                        navigate(`/library/UserViewAllBooks/getBookDetails/${book._id}`)
                                                                    }
                                                                }
                                                                className="btn btn-primary mt-3">
                                                                View More
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default UserViewAllBooks;