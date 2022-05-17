
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favList" element={<FavList/>} />
      </Routes>
    </>
  );
}

export default App;