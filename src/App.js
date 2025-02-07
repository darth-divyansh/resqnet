import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
