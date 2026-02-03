import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'


import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./Components/NetflixHome";
import { NetflixMovies } from "./Components/NetflixMovies";
import { NetflixShows } from "./Components/NetflixShows";
import { Navbar} from "./Components/NavBar"; 
import { HomeComponent } from "./Components/HomeComponent";
import { About } from "./Components/About";
import { Payment} from "./Components/Payment";
import { Series } from "./Components/Series";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/series" element={<Series />} />
        <Route path="/" element = {<HomeComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;