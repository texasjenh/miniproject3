import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'


function Navbar() {
    return (
        <nav className="navbar">
             <ul className="ul">
                <li className="li"><NavLink to="/" className="li">Home</NavLink></li>
                <li className="li"><NavLink to="/allbooks" className="li">All Books</NavLink></li>
                <li className="li"><NavLink to="/aboutus" className="li">Connect</NavLink></li>
            </ul> 
        </nav>
    )
}
  export default Navbar
  