// Outlet

import { Outlet } from "react-router-dom";


// Header

import Header from "../components/Header";


// Main

import Main from "../components/Main";


// Footer

// import Footer from "../components/Footer";


export default function DefaultLayout() {

    return (

        <>

            <Header />
            <Main />

            {/* <Footer /> */}

        </>

    )

}