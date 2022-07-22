import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Home from "./pages/Characters";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="*" element={<Home />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
