
import {useState} from 'react'
import BookCreate from './Component/BookCreate'
import BookList from './Component/BookList'

function App() {

  const [books,setBooks] = useState([])

  const createBook = (title) => {
    const updatedBooks = [...books,
       { id: books.length + 1, title }]
    setBooks(updatedBooks);
  }

  return (<div className='app'>  
    <BookCreate onCreate={createBook}/>
    <BookList books={books} />
     </div>
  )
}

export default App;
