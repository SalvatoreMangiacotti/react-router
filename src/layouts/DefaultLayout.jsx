// Outlet

import { Outlet } from "react-router-dom";


// Header

import Header from "../components/Header";


// Footer

// import Footer from "../components/Footer";


export default function DefaultLayout() {

    return (

        <>

            <Header />

            <Outlet />

            {/* <Footer /> */}

        </>

    )

}