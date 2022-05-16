import './App.css';
import Home from 'src/components/Home/Home.js';
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
   
    <Routes>
    <Route path='/'element={<Home/>}/>
    </Routes>
    
    </>
  );
}
export default App;