import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { MoonFill, SunFill, EmojiSmileFill } from 'react-bootstrap-icons';
import { useTheme } from '../../contexts/ThemeContext';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar sticky="top" expand="lg" className="bg-body border-bottom shadow-sm py-3">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '35px', height: '35px'}}>
            🌱
          </div>
          <span className="fw-bold fs-4 text-success">Plantify</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu */}
          <Nav className="mx-auto fw-medium gap-lg-3 mt-3 mt-lg-0">
            <Nav.Link href="#home">Trang chủ</Nav.Link>
            <Nav.Link href="#explore">Khám phá</Nav.Link>
            <Nav.Link href="#store">Gian hàng</Nav.Link>
            <Nav.Link href="#ai" className="text-success fw-bold">Bác sĩ AI</Nav.Link>
            <Nav.Link href="#graph">Đồ thị tri thức</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>

          {/* Actions */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <Button variant="link" className="text-body p-0" onClick={toggleTheme}>
              {theme === 'light' ? <MoonFill size={20} /> : <SunFill size={20} />}
            </Button>
            <Nav.Link href="#ask" className="d-none d-sm-block fw-medium">Hỏi AI</Nav.Link>
            <Button variant="light" className="fw-medium px-3">Đăng nhập</Button>
            <Button variant="success" className="fw-medium rounded-pill px-4 shadow-sm">Đăng ký</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};