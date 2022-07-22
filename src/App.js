import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/fav" element={<Favorites />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
