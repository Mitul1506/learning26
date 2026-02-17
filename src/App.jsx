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
import { FormDemo1 } from "./Components/form/FormDemo1";
import { FormDemo2 } from "./Components/form/FormDemo2";
import { FormDemo3 } from "./Components/form/Formdemo3";
import { FormDemo4 } from "./Components/form/FormDemo4";
import { FormDemo5 } from "./Components/form/FormDemo5";
import { FormWatch } from "./Components/form/FormWatch";
import { ApiDemo1 } from "./Components/api/ApiDemo1";
import { ApiDemo2 } from "./Components/api/ApiDemo2";
import { ApiDemo3 } from "./Components/api/ApiDemo3";
import { ApiDemo4 } from "./Components/api/ApiDemo4";


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
   <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
   <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
   <Route path="/formdemo3" element = {<FormDemo3/>}></Route>
   <Route path="/formdemo4" element = {<FormDemo4/>}></Route>
   <Route path="/formdemo5" element = {<FormDemo5/>}></Route>
   <Route path="/formwatch" element = {<FormWatch/>}></Route>
   <Route path="/ApiDemo1" element = {<ApiDemo1/>}></Route>
   <Route path="/ApiDemo2" element = {<ApiDemo2/>}></Route>
   <Route path="/ApiDemo3" element = {<ApiDemo3/>}></Route>
   <Route path="/ApiDemo4" element = {<ApiDemo4/>}></Route>
  
      </Routes>
    </div>
  );
}

export default App;