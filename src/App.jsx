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
import { Error } from "./Components/Error";
import { Watch } from "./Components/Watch";
import { Teams } from "./Components/Teams";
import { TeamDetail } from "./Components/TeamDetails";
import { UseStateDemo1 } from "./Components/UseStateDemo1";
import { UseStateDemo2 } from "./Components/UseStateDemo2";
import { UseStateDemo3 } from "./Components/UseStateDemo3";
import { FunctionDemo } from "./Components/FunctionDemo";
import { Employees } from "./Components/Employees";
import { EmployeeList } from "./Components/EmployeeList";
import { SubEmployeeList } from "./Components/SubEmployeeList";
import { InputDemo } from "./Components/InputDemo";


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
        <Route path="/*" element={<Error></Error>} />
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/teams" element={<Teams />} />
  <Route path="/teamdetail/:teamname" element={<TeamDetail />} />
  <Route path="/UseState1" element={<UseStateDemo1/>} />
  <Route path="/UseState2" element={<UseStateDemo2 />} />
  <Route path="/UseState3" element={<UseStateDemo3 />} />
  <Route path="/FunctionDemo" element={<FunctionDemo />} />
  <Route path="/Employees" element={<Employees/>} />
  <Route path="/EmployeeList" element={<EmployeeList/>} />
  <Route path="/SubEmployeeList" element={<SubEmployeeList/>} />
  <Route path="/InputDemo" element={<InputDemo/>} />
  
      </Routes>
    </div>
  );
}

export default App;