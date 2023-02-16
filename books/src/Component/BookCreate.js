import React, { useState } from "react";

function BookCreate({onCreate}) {
const [title, setTitle] = useState("");

        const handleChange = (event) => {
        setTitle(event.target.value);
        };

    const handleSubmit = (event) => {
            event.preventDefault();
            onCreate(title);
            setTitle('')
        };  

    return (
        <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} />
        <button type="submit">Create Book</button>
      </form>
    );
  }
  
  export default BookCreate;
  