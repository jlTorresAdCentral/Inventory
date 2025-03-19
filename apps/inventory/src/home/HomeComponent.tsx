import React from "react";
import { screenContainer } from "../assets/styles/core.css";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const HomeComponent = () => {
    return (
        <div className={screenContainer}>
            <Navbar />
            <h1>Home Component</h1>
            <Footer />
        </div>
    )
}

export default HomeComponent;