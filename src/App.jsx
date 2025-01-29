
import { Link } from 'react-router-dom'
import './App.css'
import Footer from './pages/Footer'
import Header from './pages/Header'

function App() {


  return (
    <>
      <div>
        <Header></Header>
        <ul>
          <li><a href="/" ></a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/home">home</a></li>
          
          <Link to={'/about'} > About us </Link>
        </ul>
      </div>
      <Footer></Footer>
   
    </>
  )
}

export default App
