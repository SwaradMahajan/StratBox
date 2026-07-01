import { BrowserRouter, Routes, Route } from "react-router-dom";

import LiveRace from "./pages/LiveRace/LiveRace";
import PreviousResults from "./pages/PreviousResults/PreviousResults";
import Championship from "./pages/Championship/Championship";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LiveRace />} />
                <Route path="/results" element={<PreviousResults />} />
                <Route path="/championship" element={<Championship />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;