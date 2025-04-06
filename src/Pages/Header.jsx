import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar expand="lg" className={`Navbar ${scrolled ? 'scrolled' : ''}`} variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <h3 className="logo">CirCus</h3>
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
};

export default Header;
