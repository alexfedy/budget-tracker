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
      <div className="w-full flex justify-center">
        <p className="text-xs text-center mt-12 mb-4">
          Built by{" "}
          <a
            href="https://alexfedy.vercel.app/"
            target="_blank"
            className="underline"
          >
            alexfedy
          </a>
        </p>
      </div>
    </Router>
  );
}

export default App;
