// import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

// function handleEvant() {
//     alert('Thanks'); 
//   }

function Header (props)
{
    return (
        <>
        <nav id='NAV'>
        <Link to="/"> Home </Link>
        {/* <Button variant="success" onClick={handleEvant}> if you like my work click me !! </Button> */}
        <h1 id='head'>Welcome to a world full of wonders</h1>
        </nav>
        </>
    );
}
export default Header ;