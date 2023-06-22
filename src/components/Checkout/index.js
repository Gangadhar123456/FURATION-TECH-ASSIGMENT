import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import './index.css'

const Cart = () => {
  const {checkOuts, removeFromCheckOuts} = useContext(CartContext)

  const handleRemoveFromCheckouts = itemId => {
    removeFromCheckOuts(itemId)
  }

  return (
    <center>
      <div className="checkouts-container">
        {checkOuts.length === 0 ? (
          <div className="empty-cart">
            <h1>Checkouts is empty</h1>
            <Link to="/BookList" className="button">
              Explore Books
            </Link>
          </div>
        ) : (
          <ul className="ul-container">
            {checkOuts.map(item => (
              <li key={item.id}>
                <img src={item.coverImageUrl} alt={item.title} />
                <h3>{item.author}</h3>
                <h3>{item.title}</h3>
                <button
                  className="button"
                  type="button"
                  onClick={() => handleRemoveFromCheckouts(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </center>
  )
}

export default Cart
