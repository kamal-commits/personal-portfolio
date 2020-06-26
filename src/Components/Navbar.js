import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div class="bg-primary">
        <nav class="navbar navbar-expand-md navbar-dark container">
          <a class="navbar-brand nav-link text-white" href="#home">
            Portfolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto text-center">
              <li class="nav-item">
                <a class="nav-link text-white" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#aboutme">
                  About Me
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-white" href="#skills">
                  Skills
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-white" href="#certificate">
                  Certificates
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-white" href="#projects">
                  Work
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
