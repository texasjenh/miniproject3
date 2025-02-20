import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import AllBooks from "../pages/AllBooks";
import PageNotFound from "../pages/PageNotFound";

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
   
            <Route path="*" element={<PageNotFound />} /> 

        </Routes>
    )
}
export default AppRoutes;