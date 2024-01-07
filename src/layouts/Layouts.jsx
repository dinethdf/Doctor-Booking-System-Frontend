import React from "react"; 
import Header from "../componants/Header/Header";
import Footer from "../componants/Footer/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
    return <>
    <Header/>
   <main>
            <Routers/>
        </main> 
    <Footer/>    
    </>
}
export default Layout;