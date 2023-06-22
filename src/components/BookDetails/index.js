import {Component} from 'react'
import './index.css'

class BookDetails extends Component {
  state = {
    book: null,
  }

  componentDidMount() {
    this.fetchBookDetails()
  }

  fetchBookDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {bookId} = params

    try {
      const url = `https://openlibrary.org/works/${bookId}.json`
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch book details')
      }
      const data = await response.json()
      const book = {
        id: bookId,
        title: data.title,
        author: data.authors ? data.authors[0].name : 'Unknown Author',
        coverImageUrl: `https://covers.openlibrary.org/b/id/${data.cover_id}-M.jpg`,
        publishYear: data.publish_year ? data.publish_year[0] : 'Unknown',
        publisher: data.publishers ? data.publishers[0] : 'Unknown',
        description: data.description
          ? data.description.value
          : 'No description available',
      }
      this.setState({book})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {book} = this.state

    if (!book) {
      return <div>Book not found</div>
    }

    const {
      title,
      author,
      coverImageUrl,
      publishYear,
      publisher,
      description,
    } = book

    return (
      <div className="book-details-container">
        <img src={coverImageUrl} alt={title} />
        <h2>{title}</h2>
        <h3>Author: {author}</h3>
        <p>Publish Year: {publishYear}</p>
        <p>Publisher: {publisher}</p>
        <p>Description: {description}</p>
      </div>
    )
  }
}

export default BookDetails
