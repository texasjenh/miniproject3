import './App.css'
import Header from './pages/header'
import Navbar from './components/navbar'
import AllBooks from './pages/AllBooks'
import AboutUs from './pages/AboutUs'
import Footer from './pages/footer'
import EmailForm from './pages/EmailList'
import HomePage from './pages/HomePage'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'




function App() {
  return ( 
    <div className="App">
        <Header />
        <Navbar />
          <AppRoutes />
        <Footer />
     


    </div>
  )
}

export default App

