import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer bg-warning py-4 ">
        <div className="container">
          {/* Copyright Section */}
          <div className="copyright text-center mb-3">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Sowrov</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="social-links d-flex justify-content-center mb-3">
            <a href="https://twitter.com/" className="mx-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.facebook.com/" className="mx-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/" className="mx-2">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" className="mx-2">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

          {/* Credits Section */}
          <div className="credits text-center">
            Designed by{" "}
            <a
              href="https://bootstrapmade.com/"
              target="_blank"
              rel="noreferrer"
            >
              BootstrapMade
            </a>{" "}
            Distributed by{" "}
            <a href="https://themewagon.com" target="_blank" rel="noreferrer">
              Sowrov's theme
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;