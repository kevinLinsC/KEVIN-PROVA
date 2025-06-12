// Importação do react-boostrap
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"

// Importação dos estilos
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div>
        <Navbar className={styles.navbar} expand='lg' data-bs-theme='dark'>
            <Container style={{maxWidth: '90%'}}>
                <Navbar.Toggle aria-controls='minha-nav' />
                
                <Navbar.Collapse id='minha-nav'>
                    {/* Navegação */}
                    <Nav className="mx-auto gap-5">
                        <Nav.Link className={styles.textoNavbar} href="/Cadastro-usuario">Cadastrar Usuario</Nav.Link>
                        <Nav.Link className={styles.textoNavbar} href="/Cadastro-tarefa">Cadastrar Tarefa</Nav.Link>
                        <Nav.Link className={styles.textoNavbar} href="/Inicio">Visualizar tarefas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar