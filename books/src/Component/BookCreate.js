import { useState, useContext } from "react";
import BooksContext from "../context/books";


function BookCreate() {
const [title, setTitle] = useState("");
const { BookCreate} = useContext(BooksContext)

        const handleChange = (event) => {
        setTitle(event.target.value);
        };

    const handleSubmit = (event) => {
            event.preventDefault();
            BookCreate(title);
            setTitle('')
        };  

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
                <form  onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button" type="submit">Create Book</button>
                 </form>
      </div>
    );
  }
  
  export default BookCreate;
  