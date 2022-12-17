import { EthProvider } from "./contexts/EthContext";
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import CreateFundPage from "./pages/CreateFundPage/CreateFundPage";

function App() {
  return (
    <EthProvider>
    
        <Navbar/>
    
      
     
  </EthProvider>
  );
}

export default App;
