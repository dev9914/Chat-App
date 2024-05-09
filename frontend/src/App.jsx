import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Route,Routes } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'
import { Navigate } from 'react-router-dom'
import About from './components/navbar/About';
import Navbar from './components/navbar/Navbar'
import Contact from './components/navbar/Contact'

function App() {
  const {authUser} = useAuthContext();

  return (
    <div className="h-screen flex">
      {authUser ? <Navbar /> : ""}
      
    <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
      <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App
