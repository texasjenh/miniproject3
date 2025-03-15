import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/Home"
import AboutUs from "../pages/AboutUs";
import AllBooks from "../pages/AllBooks";
import PageNotFound from "../pages/PageNotFound";
import ShoppingCart from "../pages/Cart";
import LoginSignup from "../components/LoginSignup/LoginSignup";


function AppRoutes(props) {
    
    return (
        <Routes>
    
            <Route index element={<HomePage {...props} />} />

            <Route path="allbooks" element={<AllBooks {...props} />} >
                {/* <Route path="/fiction" element={Fiction />} />
                <Route path="/mystery" element={Mystery />} />
                <Route path="/nonfiction" element={Nonfiction />} />
                <Route path="/romance" element={Romance />} /> */}

            </Route>
   
            <Route path="aboutus" element={<AboutUs />} /> 

            <Route path="cart" element={<ShoppingCart />} />

            <Route path="login" element={<LoginSignup />} />
   
            <Route path="*" element={<PageNotFound />} /> 

        </Routes>
    )
}
export default AppRoutes;