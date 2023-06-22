import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import './index.css'

const BookItem = props => {
  const {eachBook} = props
  const {coverImageUrl, title, author, publishYear} = eachBook
  const {
    addToCart,
    checkOuts,
    addToCheckOuts,
    removeFromCheckOuts,
  } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(eachBook)
  }

  const handleAddToCheckOuts = () => {
    if (!checkOuts.includes(eachBook)) {
      addToCheckOuts(eachBook)
    } else {
      removeFromCheckOuts(eachBook.id)
    }
  }

  return (
    <li className="eachBook">
      <div className="book-item">
        <img src={coverImageUrl} alt={title} />
        <div className="book-details">
          <h2>{title}</h2>
          <p>Author: {author}</p>
          <p>Publish Year: {publishYear}</p>
          <div className="checkbox">
            <label htmlFor="checkbox">Check</label>
            <input
              id="checkbox"
              type="checkbox"
              onChange={handleAddToCheckOuts}
              checked={checkOuts.includes(eachBook)}
            />
          </div>
          <button className="button" type="button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </li>
  )
}

export default BookItem
