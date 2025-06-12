import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar/Navbar.jsx';
import React from "react";

function App() {
  return (
    <>
    <React.StrictMode>
        <div className="App">
          <NavBar />
          <Container>
            <Outlet />
          </Container>
        </div>
      </React.StrictMode>
    </>
  )
}

export default App
