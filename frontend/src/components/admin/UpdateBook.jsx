import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import AdminSideBar from "../layout/AdminSideBar";


function UpdateBook() {
    let navigate = useNavigate();

    const paramID = useParams("");

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [publisher, setPublisher] = useState("");
    const [pages, setPages] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };



    const updateBookDetails = async (e) => {
        e.preventDefault();

        const book = {
            title,
            author,
            publishDate,
            publisher,
            pages,
            category,
            description
        }

        await axios.put(`http://localhost:4000/api/v1/books/updateBookDetails/` + paramID.id, book)

        Swal.fire({
            title: 'Update Successfully',
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        })

        navigate("/library/viewAllBooks");

        setTitle("");
        setAuthor("");
        setPublishDate("");
        setPublisher("");
        setPages(0);
        setCategory("");
        setDescription("");

    }

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/books/getSingleBook/` + paramID.id)
            .then((res) => {
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setPublishDate(res.data.publishDate);
                setPublisher(res.data.publisher);
                setPages(res.data.pages);
                setCategory(res.data.category);
                setDescription(res.data.description);
                console.log(res.data);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>

            <div className="row" style={{ maxWidth: "100%" }}>
                <div className="col-md-2">
                    <AdminSideBar />
                </div>
                <div className="col-md-10">
                    <div className="container" style={{ height: "40px" }}>{/* Header */}</div>
                    <div className="container">
                        <div className="row">

                            <div className="col-md">
                                <div className="card" style={{ maxWidth: "50%", marginLeft:"17em" }}>
                                    <div className="card-body">
                                        <h2 className="text-center">Update Book Details</h2>

                                        <form action="" onSubmit={updateBookDetails} id="form">

                                            <div className="form-row">
                                                <div className="col">
                                                    <label htmlFor="inputTitle">Book Title</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={title}
                                                        onChange={(e) => { setTitle(e.target.value) }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="col">
                                                    <label htmlFor="inputAuthor">Author</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={author}
                                                        onChange={(e) => { setAuthor(e.target.value) }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="col">
                                                    <label htmlFor="inputPublishDate">Publish Date</label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        value={publishDate}
                                                        onChange={(e) => { setPublishDate(e.target.value) }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="col">
                                                    <label htmlFor="inputPublisher">Publisher</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={publisher}
                                                        onChange={(e) => { setPublisher(e.target.value) }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="col">
                                                    <label htmlFor="inputPages">No of Pages</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        value={pages}
                                                        onChange={(e) => { setPages(e.target.value) }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div class="col">
                                                    <label htmlFor="inputCategory">Select Category</label>
                                                    <select id="inputState"
                                                        value={category}
                                                        onChange={handleCategory}
                                                        required
                                                        className="form-control">
                                                        {/* <option selected>Choose...</option> */}
                                                        <option value={"Category 01"}>Category 01</option>
                                                        <option value={"Category 02"}>Category 02</option>
                                                        <option value={"Category 03"}>Category 03</option>
                                                        <option value={"Category 04"}>Category 04</option>
                                                        <option value={"Other"}> Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="col">
                                                    <label htmlFor="inputDescription">Description</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={description}
                                                        onChange={(e) => { setDescription(e.target.value) }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <button type="submit" class="btn btn-primary mt-4" style={{ width: '100%', height: '40px' }}>
                                                Update
                                            </button>

                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdateBook;