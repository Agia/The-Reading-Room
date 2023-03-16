// Imports
import { React } from "react";
import { useFormik } from "formik";
import "./style.css";


const Review = () => {
    // const [bookTitle, getBookTitle] = useState("");
    // const [author, getAuthor] = useState("");
    const formik = useFormik({
        initialValues: {
            bookTitle: "",
            author: "",
            summary: "",
            rating: "",
            notes: "",
        },
        onSubmit: values => {
            // TODO: Convert to storage & modal / button change
            // alert(JSON.stringify(values, null, 2));
            alert("Saved");
            console.log(values);
            // values = "";
        },
    });

    return (
        <div id="review">
            <h2>Book Review</h2>
            <div className="book-review">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="page-layout">
                        <div className="left-page">
                            <label htmlFor="bookTitle">Book Title</label>
                            <input
                                id="bookTitle"
                                name="bookTitle"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.bookTitle}
                            />

                            <label htmlFor="author">Author</label>
                            <input
                                id="author"
                                name="author"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.author}
                            />

                            <label htmlFor="summary">One-line Summary</label>
                            <textarea
                                id="summary"
                                name="summary"
                                type="text"
                                rows="8"
                                onChange={formik.handleChange}
                                value={formik.values.summary}
                            />

                            {/* TODO: Change rating  */}
                            <label htmlFor="rating">Rating</label>
                            <input
                                id="rating"
                                name="rating"
                                type="range"
                                min="1" max="5" step="0.5"
                                list="markers"
                                onChange={formik.handleChange}
                                value={formik.values.rating}
                            />

                            <datalist id="markers">
                                <option value="1" label="1"></option>
                                <option value="2" label="2"></option>
                                <option value="3" label="3"></option>
                                <option value="4" label="4"></option>
                                <option value="5" label="5"></option>
                            </datalist>
                        </div>
                        
                        <div className="right-page">
                            <label htmlFor="notes">Notes</label>
                            <textarea
                                id="notes"
                                name="notes"
                                type="text"
                                cols="50"
                                rows="40"
                                onChange={formik.handleChange}
                                value={formik.values.notes}
                            />

                        </div>
                        </div>
                        <button type="submit">Save</button>
                    </form>
            </div>
        </div>
    )
}

export default Review;