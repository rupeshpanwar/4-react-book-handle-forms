import { useState } from "react";   
   
   function BookEdit({ book , onEdit}) {
    
    const [newTitle, setNewTitle] = useState(book.title);
    
    const handleChange = (event) => {
    setNewTitle(event.target.value);
    };
    
    const handleSubmit = (event) => {
    event.preventDefault();
    // save the changes to the book
    onEdit(book.id, newTitle)
    };
    
    return (
    <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
    <input className="input" value={newTitle} onChange={handleChange} />
    <button className="button is-primary">Save</button>
    </form>
    );
    }
    
    export default BookEdit;
    
    
    
    