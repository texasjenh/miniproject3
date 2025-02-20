import React from "react"
import '../app.css'
import SubscribeForm from "../components/Subscribe"

const HomePage=() => {
    return (
        <>
            <div className="about">
                <h2 className='head2'><i className='fa-solid fa-people-roof'></i> About</h2>
                    <p className='about'>We are a boutique bookshop. Think of "You've Got Mail". Yep, that's us. <br/> 
                    Except we are tucked away off the main road of small town U.S.A. <br/> 
                    Come in, find a book, have a chat.</p>            
            <br/>
                <h2 className="head2"><i className="fa-solid fa-book-open-reader"/> Find your next great read...</h2>     
                    <p className="about2"> Get new release info straight to your inbox.</p>
                    <SubscribeForm />
            </div>  
        </>
    )
}

export default HomePage