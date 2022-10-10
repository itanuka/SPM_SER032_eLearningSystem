import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdminSideBar from "../layout/AdminSideBar";

function AddBook() {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");
    const [publishDate, setPublishDate] = useState("");
    const [publisher, setPublisher] = useState("");
    const [pages, setPages] = useState(0);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [book, setbook] = useState();
    const [file, setFile] = useState();

    const navigate = useNavigate();

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };

    const role = "admin";

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", title);
        data.append("isbn", isbn);
        data.append("author", author);
        data.append("publishDate", publishDate);
        data.append("publisher", publisher);
        data.append("pages", pages);
        data.append("category", category);
        data.append("description", description);
        data.append("file2", book);
        data.append("file1", file);

        await axios.post('http://localhost:4000/api/v1/books/uploadBook', data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => { console.error(err) })

        await Swal.fire({
            title: 'Upload Successfully',
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        })
        window.location = "/library/viewAllBooks";
    };

    return (
        <div>
            <div className="row" style={{ maxWidth: "100%" }}>
                <div className="col-md-2">
                    <AdminSideBar />
                </div>
                <div className="col-md-10">
                    <div className="container" style={{ height: "60px" }}></div>
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
                                                        placeholder="book title"
                                                        value={title}
                                                        onChange={(e) => { setTitle(e.target.value) }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="col">
                                                    <label htmlFor="inputIsbn">ISBN</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={isbn}
                                                        pattern="[0-9]{13}"
                                                        placeholder="0000000000000"
                                                        title="ISBN must contain 13 numbers"
                                                        onChange={(e) => { setIsbn(e.target.value) }}
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
                                                        placeholder="author"
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
                                                        placeholder="publisher"
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
                                                        min={0}
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
                                                        <option value={"General Books"}>General Books</option>
                                                        <option value={"Philosophy & Psychology"}>Philosophy & Psychology</option>
                                                        <option value={"Religion"}>Religion</option>
                                                        <option value={"Social Sciences"}>Social Sciences</option>
                                                        <option value={"Languages"}>Languages</option>
                                                        <option value={"Natural Sciences & Mathematics"}>Natural Sciences & Mathematics</option>
                                                        <option value={"Technology"}>Technology</option>
                                                        <option value={"Art"}>Art</option>
                                                        <option value={"Literature"}>Literature</option>
                                                        <option value={"Biography, History and Geography"}>Biography, History and Geography</option>
                                                        <option value={"Library Science"}>Library Science</option>
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
                                                        placeholder="description"
                                                        value={description}
                                                        onChange={(e) => { setDescription(e.target.value) }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="col">
                                                    <label htmlFor="inputFile">Upload Book</label>
                                                    <input
                                                        type="file"
                                                        name="file2"
                                                        className="form-control"
                                                        onChange={e => { setbook(e.target.files[0]) }}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="col">
                                                    <label htmlFor="inputFile">Cover Photo</label>
                                                    <input
                                                        type="file"
                                                        name="file1"
                                                        className="form-control"
                                                        onChange={e => { setFile(e.target.files[0]) }}
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
            </div>

        </div>
    )
}


export default AddBook;