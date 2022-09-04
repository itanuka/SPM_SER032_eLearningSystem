import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UserViewAllBooks() {
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

    useEffect(() => {
        loadBooks()
    }, []);

    return (
        <div>
            <div className="container" style={{ height: "60px" }}></div>
            <div className="container">
                <h1 className="text-center">Digital Library</h1>
            </div>
            <div className="container mt-5">
                <div class="row row-cols-1 row-cols-md-3">
                    {
                        books.map((book) => {
                            return (
                                <div >
                                    {
                                        <div class="col mb-4">
                                            <div class="card h-100">
                                                <img src="https://wisdomtreeindia.com/images/product/Mini-Habits-Cover.jpg"
                                                    className="card-img-top" alt="..."
                                                />
                                                <div class="card-body">
                                                    <h5 class="card-title">{book.title}</h5>
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
    )
}

export default UserViewAllBooks;