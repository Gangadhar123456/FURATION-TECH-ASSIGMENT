import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import './index.css'

const Cart = () => {
  const {cartItems, removeFromCart} = useContext(CartContext)

  const handleRemoveFromCart = itemId => {
    removeFromCart(itemId)
  }

  return (
    <center>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h1>Cart is empty</h1>
            <Link to="/BookList" className="button">
              Explore Books
            </Link>
          </div>
        ) : (
          <ul className="ul-container">
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.coverImageUrl} alt={item.title} />
                <h3>{item.author}</h3>
                <h3>{item.title}</h3>
                <button
                  className="button"
                  type="button"
                  onClick={() => handleRemoveFromCart(item.id)}
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
