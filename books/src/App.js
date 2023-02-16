
import {useState} from 'react'
import BookCreate from './Component/BookCreate'

function App() {

  const [books,setBooks] = useState()

  const createBook = (title) => {
    console.log('need to add the book:' , title )
  }

  return (<div>  
    <BookCreate onCreate={createBook}/>
     </div>
  )
}

export default App;
