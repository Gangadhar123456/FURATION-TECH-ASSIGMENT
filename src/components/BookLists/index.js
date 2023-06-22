import {Component} from 'react'
import BookItem from '../BookItem'
import './index.css'

class BookList extends Component {
  state = {
    listOfBooks: [],
    searchQuery: '',
  }

  componentDidMount() {
    this.getBooksList()
  }

  getBooksList = async () => {
    try {
      const url = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings'
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch book data')
      }
      const data = await response.json()
      const filteredData = data.docs.map(book => ({
        id: book.key,
        title: book.title,
        author: book.author_name ? book.author_name[0] : 'Unknown Author',
        coverImageUrl: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`,
        publishYear: book.publish_year ? book.publish_year[0] : 'Unknown',
      }))
      this.setState({listOfBooks: filteredData})
    } catch (error) {
      console.error(error)
    }
  }

  handleSearchChange = event => {
    this.setState({searchQuery: event.target.value})
  }

  filterBooks = () => {
    const {listOfBooks, searchQuery} = this.state
    return listOfBooks.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  render() {
    const {searchQuery} = this.state
    const filteredBooks = this.filterBooks()

    return (
      <div className="book-list-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={this.handleSearchChange}
          />
        </div>
        <ul className="book-lists">
          {filteredBooks.length > 0 ? (
            filteredBooks.map(book => (
              <BookItem key={book.id} eachBook={book} />
            ))
          ) : (
            <p className="description">No books found.</p>
          )}
        </ul>
      </div>
    )
  }
}

export default BookList
