import React, { Component } from "react";

// Home page
import Navigation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";
import Ipad from "./Pages/Ipad/Ipad";
import "bootstrap/dist/css/bootstrap.min.css";

// import general css
import "./css/styles.css";

// my YoutubeVideos component
import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos";

import { Route, Routes } from "react-router-dom";

// Route
// Renders components based on the URL
// functional component
function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/iphone" element={<Iphone />} />
                <Route path="/Mac" element={<Mac />} />
                <Route path="/ipad" element={<Ipad />} />
                {/* <Route path="/Productpage" element={<Productpage />} /> */}
                <Route path="*" element={<Four04 />} />
                {/* <main />
        <Iphone />
        <Mac />
        <Four04 />
        <Productpage /> */}
            </Routes>

            <Footer />

            {/* <YoutubeVideos /> */}
        </>
    );
}

export default App;
