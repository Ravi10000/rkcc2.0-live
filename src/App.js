import "./app.styles.scss";
import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/home/home.page";
import Footer from "./components/footer/footer.component";
import AboutPage from "./pages/about/about.page";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route path='*' element={<Navigate to="/" replace />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
