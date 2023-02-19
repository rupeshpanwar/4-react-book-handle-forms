
import {useContext, useEffect} from 'react'
import BookCreate from './Component/BookCreate'
import BookList from './Component/BookList'
import BooksContext from './context/books'

function App() {

 const { fetchBooks} = useContext(BooksContext)

  useEffect(() => {
    fetchBooks()
    },[]
  )

  return (<div className='app'>  
    <h1>Reading List</h1>
    <BookCreate />
    <BookList />
     </div>
  )
}

export default App;
