
import {useState, useEffect} from 'react'
import BookCreate from './Component/BookCreate'
import BookList from './Component/BookList'
import axios from 'axios'

function App() {

  const [books,setBooks] = useState([])

  const fetchBooks = async () => {

      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data)
    
  };

  useEffect(() => {
    fetchBooks()
    },[]
  )

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
    if (book.id === id) {
    return {...book, title: newTitle};
    }
    return book;
    });
    setBooks(updatedBooks);
    };


  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
  const response= await axios
    .post("http://localhost:3001/books", { title })

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
    }

  return (<div className='app'>  
    <h1>Reading List</h1>
    <BookCreate onCreate={createBook}/>
    <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
     </div>
  )
}

export default App;
