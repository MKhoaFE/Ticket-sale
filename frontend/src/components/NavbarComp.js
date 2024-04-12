import React, { Component, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import "./style/style.css";
import { useState } from "react";
export default function NavbarComp() {
  const [activeLink, setActiveLink] = useState("TRANG CHỦ");

  useEffect(() => {
    const handleNavClick = (linkName) => {
      setActiveLink(linkName);
    };

    // Lấy danh sách các nút Nav.Link
    const navLinks = document.querySelectorAll('.nav-link');

    // Thêm sự kiện click cho mỗi nút
    navLinks.forEach((link) => {
      link.addEventListener('click', function(event) {
        // Loại bỏ lớp active khỏi tất cả các nút
        navLinks.forEach(link => {
          link.classList.remove('active');
        });

        // Thêm lớp active vào nút được click
        this.classList.add('active');

        // Cập nhật activeLink
        handleNavClick(this.innerText);
      });
    });

    // Xóa sự kiện khi component unmount
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  

    
    return (
      <Router>
        <div className="logoAndLoginSignup">
          <Navbar
            style={{ backgroundColor: "#FFCCC0" }}
            variant={"light"}
            expand="lg"
            className="header d-flex flex-row-reverse"
          >
            <div
              className="container d-flex flex-row-reverse justify-content-between header-res"
              style={{ width: "100%" }}
            >
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{
                  maxHeight: "100px",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
                navbarScroll
              >
                <Button variant="primary" size="sm" className="login" as={Link} to="/login">
                  Đăng nhập/Đăng ký
                </Button>
              </Nav>

              <Navbar.Brand
                className="d-flex justify-content-center logo "
                style={{ width: "100%", textAlign: "center" }}
              >
                <Link
                  className="test"
                  style={{ textDecoration: "none", color: "black" }}
                  as={Link}
                  to="/home"
                >
                  LOGO
                </Link>
              </Navbar.Brand>

              <Navbar.Brand
                href="#"
                className="d-flex language"
                style={{ width: "100%", fontSize:"13px" }}
              >
                Tiếng Việt
              </Navbar.Brand>
            </div>
          </Navbar>
        </div>
        <div className="nav-menu">
          <Navbar
            expand="lg"
            className="bg-body-tertiary"
            style={{ backgroundColor: "#FFCCC0" }}
          >
            <Container>
              <Navbar.Brand className="title" href="#">
                Navbar scroll
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{
                    maxHeight: "100px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: "500",
                    fontSize: "18px",
                    paddingBottom:"1rem"
                  }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to="/home" className="active" >
                    TRANG CHỦ
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">LỊCH TRÌNH</Nav.Link>
                  <Nav.Link href="#action3">TRA CỨU VÉ</Nav.Link>
                  <Nav.Link href="#action4">TIN TỨC</Nav.Link>
                  <Nav.Link href="#action5">HÓA ĐƠN</Nav.Link>
                  <Nav.Link href="#action6">LIÊN HỆ</Nav.Link>
                  <Nav.Link href="#action7">VỀ CHÚNG TÔI</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  
}
