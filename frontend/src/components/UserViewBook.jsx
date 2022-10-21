import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import UserSideBar from "./layout/UserSideBar";
import download from 'downloadjs';


function UserViewBook() {
    let navigate = useNavigate();

    const [book, setBook] = useState({});
    const [link, setLink] = useState("");
    const { id } = useParams();

    const [title, setTitle] = useState(book.title);
    const [isbn, setIsbn] = useState(book.isbn);
    const [author, setAuthor] = useState(book.author);
    const [publishDate, setPublishDate] = useState(book.publishDate);
    const [publisher, setPublisher] = useState(book.publisher);
    const [pages, setPages] = useState(book.setPages);
    const [category, setCategory] = useState(book.category);
    const [description, setDescription] = useState(book.description);

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };


    async function getBookDetails() {
        axios.get(`http://localhost:4000/api/v1/books/getSingleBook/${id}`)
            .then((res) => {

                setBook(res.data);
                setLink(`/uploads/${res.data.cover_file_path.substring(27)}`
                )
                console.log(res.data);
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getBookDetails()
    }, [])

    const downloadFile = async (id, path, mimetype) => {
        try {
            const result = await axios.get(`http://localhost:4000/api/v1/books/download/${id}`, {
                responseType: 'blob'
            });
            const split = path.split('/');
            const filename = split[split.length - 1];
            // setErrorMsg('');
            return download(result.data, filename, mimetype);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // setErrorMsg('Error while downloading file. Try again later');
            }
        }
    };

    // let link = `/uploads/${book.cover_file_path.substring(27)}`

    return (

        < div >
            <div className="row" style={{ maxWidth: "100%" }}>
                <div className="col-md-2">
                    <UserSideBar />
                </div>
                <div className="col-md-10">


                    <div className="container" style={{ height: "20px" }}></div>

                    <div className="container">
                        <h1 className="text-center">{book.title}</h1>
                    </div>

                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-5">
                                <div class="card h-100" >
                                    <div class="col mb-4">
                                        <img src={link}
                                            className="card-img-top mt-3"
                                            // style={{width:"280px", height:"220px"}} 
                                            alt="..."
                                        />
                                        <div class="card-body">
                                            {/* <h5 class="card-title">{book.title}</h5> */}
                                            <h6 class="card-text">ISBN: {book.isbn}</h6>
                                            <h6 class="card-text">Author: {book.author}</h6>
                                            <h6 class="card-text">Publish Date: {book.publishDate}</h6>
                                            <h6 class="card-text">Publisher: {book.publisher}</h6>
                                            <h6 class="card-text">No of Pages: {book.pages}</h6>
                                            <h6 class="card-text">Category: {book.category}</h6>
                                            <h6 class="card-text">Description: {book.description}</h6>
                                            {/* <button

                                                href="#" class="btn btn-primary mt-3">Download
                                            </button> */}

                                            {/* <button className="btn btn-primary mt-3"
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: 'Download Successfully',
                                                        icon: "success",
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    })
                                                }}>Download</button> */}

                                            <button className="btn btn-primary mt-3"
                                                onClick={() => {
                                                    downloadFile(book._id, book.book_file_path, book.book_file_mimetype)
                                                }}>Download</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>



                    </div>


                </div>
            </div>


        </div >
    )
}

export default UserViewBook;