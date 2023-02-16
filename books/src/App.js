
import {useState} from 'react'
import BookCreate from './Component/BookCreate'

function App() {

  const [books,setBooks] = useState([])

  const createBook = (title) => {
    const updatedBooks = [...books,
       { id: books.length + 1, title }]
    setBooks(updatedBooks);
  }

  return (<div>  
    <BookCreate onCreate={createBook}/>
     </div>
  )
}

export default App;
