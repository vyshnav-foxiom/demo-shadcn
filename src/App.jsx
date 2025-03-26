import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Layout from './components/connection/Layout'
import PageNotFound from './components/Web/PageNotFound'
import Admin from './page/Admin/Admin'
import PrivateRoute from './utils/PrivateRoute'
import Login from './components/Web/Login'

// import Navbar from './components/Web/Navbar'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<PrivateRoute><Layout /></PrivateRoute>}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </div>
    </>
  )
}

export default App
