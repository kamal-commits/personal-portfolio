import React from 'react';
import mern from '../image/certificates/mern.PNG';
import react from '../image/certificates/react.PNG';
import node from '../image/certificates/node.PNG';

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
            <img src={mern} alt="" class="img-fluid" />
          </div>
          <div class="col-md-4 mt-5">
            <img src={react} alt="" class="img-fluid" />
          </div>
          <div class="col-md-4 mt-5">
            <img src={node} alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
