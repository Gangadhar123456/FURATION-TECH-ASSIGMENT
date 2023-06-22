import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import BookList from './components/BookLists'
import {CartProvider} from './context/CartContext'
import BookDetails from './components/BookDetails'

import './App.css'
import Checkout from './components/Checkout'

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/BookList" component={BookList} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/books/:bookId" component={BookDetails} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    </CartProvider>
  </BrowserRouter>
)

export default App
