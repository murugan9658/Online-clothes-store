
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import SignUpPage from './Pages/Signup'
import ProfilePage from './Pages/Profilepage'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import AddCartPage from './Pages/AddCartPage'
import ProductDetailPage from './Pages/ProductDetailpage'
import PaymentPage from './Pages/PaymentPage'
import LivesFooter from './Components/Contact'


function App() {
   return (
    <AuthProvider>
      <CartProvider>
            <Router>
              <Navbar/>
                <Routes>
                  <Route path='/' element={<Home/>}  />
                  <Route path='/profile' element={<ProfilePage/>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/signup' element={<SignUpPage/>} />
                  <Route path='/cart' element={<AddCartPage/>} />
                  <Route path='/products/:id' element={<ProductDetailPage/>} />
                  <Route path='/payment/:id' element={<PaymentPage/>}  />
                </Routes> 
            </Router>
            <LivesFooter/>
      </CartProvider>
  </AuthProvider>
    
  )
}

export default App
