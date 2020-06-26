import React from 'react';

const Certificate = () => {
  return (
    <div>
      <div class="container mb-5" id="certificate">
        <h1
          class="text-center font-weight-bold"
          style={{ marginTop: '25%', textDecoration: 'underline' }}
        >
          Certificates
        </h1>

        <div class="row" style={{ marginTop: '2%' }}>
          <div class="col-md-4 mt-5">
            <img src="https://res.cloudinary.com/kkamal714/image/upload/v1593164877/Portfolio/mern_il9fru.png" alt="" class="img-fluid" />
          </div>
          <div class="col-md-4 mt-5">
            <img src="https://res.cloudinary.com/kkamal714/image/upload/v1593164876/Portfolio/react_rgvseg.png" alt="" class="img-fluid" />
          </div>
          <div class="col-md-4 mt-5">
            <img src="https://res.cloudinary.com/kkamal714/image/upload/v1593164876/Portfolio/node_z9sjn7.png" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
