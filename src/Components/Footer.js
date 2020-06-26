import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div class="container-fluid mt-5 mb-1 text-center bg-light pt-5 pb-5">
        <footer>
          <a href=" https://github.com/kkamal714">
            <i class="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/sirf.kamal/" class="ml-4">
            <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/0nly.Kamal" class="ml-4">
            <i class="fa fa-facebook fa-3x" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kamal-shah-107a75155/"
            class="ml-4"
          >
            <i class="fa fa-linkedin fa-3x" aria-hidden="true"></i>
          </a>
          <br />
          <br />
          <h4>All rights Reserved | Copyright © {year}</h4>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
