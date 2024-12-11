import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Provider } from 'react-redux'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import ProductCreate from './pages/product/ProductCreate'
// import { store } from './store/store'
// import { AuthProvider } from './context/AuthContext'
// import ProtectedRoute from './routes/ProtectedRoute'
// import GuestRoute from './routes/GuestRoute'

const App: React.FC = () => {
  return (
    <Router>
      {/* <Provider store={store}> */}
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/product/create" element={<ProductCreate/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {/* </AuthProvider> */}
      {/* </Provider> */}
    </Router>
  )  
}

export default App