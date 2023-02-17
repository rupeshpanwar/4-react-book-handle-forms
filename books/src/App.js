
import {useState} from 'react'
import BookCreate from './Component/BookCreate'
import BookList from './Component/BookList'

function App() {

  const [books,setBooks] = useState([])

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

  const createBook = (title) => {
    const updatedBooks = [...books,
       { id: books.length + 1, title }]
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
