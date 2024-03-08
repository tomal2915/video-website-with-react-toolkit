import Navbar from "./components/navbar/Navbar";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:videoId" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
