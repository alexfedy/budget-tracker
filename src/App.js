import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tracker from "./pages/Tracker";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="w-full flex justify-center">
        <Nav />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/finance-tracker" element={<Tracker />} />
      </Routes>
    </Router>
  );
}

export default App;
