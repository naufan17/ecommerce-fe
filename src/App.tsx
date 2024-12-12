import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import ProductCreate from './pages/product/ProductCreate'
import { store } from './store/store'
import ProtectedRoute from './routes/ProtectedRoute'
import GuestRoute from './routes/GuestRoute'
import ProductDetail from './pages/product/ProductDetail'
import ProductUpdate from './pages/product/ProductUpdate'

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route 
            path="/" 
            element={<Home/>}
          />
          <Route 
            path="/home" 
            element={<Home/>}
          />
          <Route 
            path="/login" 
            element={
              <GuestRoute>
                <Login/>
              </GuestRoute>}
          />
          <Route 
            path="/register" 
            element={
              <GuestRoute>
                <Register/>
              </GuestRoute>
            }/>
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
            }/>
          <Route 
            path="/product/create" 
            element={
              <ProtectedRoute>
                <ProductCreate/>
              </ProtectedRoute>
            }/>
          <Route 
            path="/product/:id"
            element={
              <ProductDetail/>
            }/>
          <Route
            path='/product/update/:id'
            element={
              <ProtectedRoute>
                <ProductUpdate/>
              </ProtectedRoute>
            }/>
          <Route 
            path="*" 
            element={<NotFound/>}
          />
        </Routes>
        {/* </AuthProvider> */}
      </Provider>
    </Router>
  )  
}

export default App