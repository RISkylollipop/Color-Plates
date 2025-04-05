import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Header.css'
const Home = () => {
  const navigate = useNavigate();

return (

  <>
 <Navbar expand="lg" style={{ backgroundColor: 'grey' }} variant="dark">
    <Container>
      <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <h3 className='logo'>CirCus</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
          <Nav.Link onClick={() => navigate('/services')}>Services</Nav.Link>
          <Nav.Link onClick={() => navigate('/contact')}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

</>
);
}


export default Home;


