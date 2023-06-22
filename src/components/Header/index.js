import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">Book Store</h1>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/BookList" className="nav-link">
            BooksList
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/checkout" className="nav-link">
            Checkout
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
