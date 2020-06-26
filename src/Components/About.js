import React from 'react';

export const About = () => {
  return (
    <div>
      <div class="container mb-5" id="aboutme">
        <h1
          class="text-center font-weight-bold"
          style={{ marginTop: '10%', textDecoration: 'underline' }}
        >
          LET ME INTRODUCE MYSELF
        </h1>

        <div class="row" style={{ marginTop: '8%' }}>
          <div class="col-md-5 mt-5">
            <h5 style={{ fontSize: '25px' }}>
              HELLO, MY SELF KAMAL KUMAR SHA. I AM A FULL STACK DEVELOPER WITH
              THE KNOWLEDGE OF FRONTEND AS WELL AS BACKEND CURRENTLY I AM
              PURSUING BCA FROM IGNOU.
            </h5>
            <a
              href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:ac2f1865-4f53-443d-b7ad-a04883e8cebd"
              class="btn btn-outline-info mt-3"
            >
              DOWNLOAD CV
            </a>
          </div>
          <div class="col-md-4 offset-md-3">
            <img src="https://res.cloudinary.com/kkamal714/image/upload/v1593164861/Portfolio/cartoon_u2gt3y.jpg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};
