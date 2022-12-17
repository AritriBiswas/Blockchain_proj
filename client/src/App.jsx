import { EthProvider } from "./contexts/EthContext";
import Navbar from "./components/Navbar/Navbar"
import LandingPage from "./pages/LandingPage/LandingPage"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateFundPage from "./pages/CreateFundPage/CreateFundPage";


function App() {
  return (
    <EthProvider>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/createfund" element={<CreateFundPage/>}/>
        </Routes>
      </BrowserRouter>
      
     
  </EthProvider>
  );
}

export default App;
