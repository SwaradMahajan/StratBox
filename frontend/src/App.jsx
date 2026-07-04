import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";

import LiveRace from "./pages/LiveRace/LiveRace";
import PreviousResults from "./pages/PreviousResults/PreviousResults";
import Championship from "./pages/Championship/Championship";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<LiveRace />} />
                <Route path="/results" element={<PreviousResults />} />
                <Route path="/championship" element={<Championship />} />
            </Routes>
        </>
    );
}

export default App;