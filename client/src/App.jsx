import { EthProvider } from "./contexts/EthContext";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import OngoingPage from "./pages/Ongoing/OngoingPage";
import CreateFundPage from "./pages/CreateFundPage/CreateFundPage";

function App() {
    return (
        <EthProvider>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Navbar path="/logodark.svg"></Navbar>

                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/ongoing" element={<OngoingPage />} />
                    <Route path="/createfund" element={<CreateFundPage />} />
                </Routes>
            </BrowserRouter>
        </EthProvider>
    );
}

export default App;
