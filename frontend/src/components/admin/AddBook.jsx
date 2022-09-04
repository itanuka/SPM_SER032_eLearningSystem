import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [publisher, setPublisher] = useState("");
    const [pages, setPages] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };

    const role = "admin";

    const handleSubmit = async (e) => {
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
        await axios.post('http://localhost:4000/api/v1/books/uploadBook', book)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => { console.error(err) })

            Swal.fire({
                title: 'Upload Successfully',
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              })
            navigate("/");
    };

    return (
        <div>
            <div className="container" style={{ height: "60px" }}>{/* Header */}</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">Upload Book</h2>

                                <form action="" onSubmit={handleSubmit} id="form">

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
                                                <option selected>Choose...</option>
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
                                        Upload
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>

                </div>
            </div>
        </div>
    )
}


export default AddBook;