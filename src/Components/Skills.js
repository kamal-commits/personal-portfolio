import React from 'react';

const Skills = () => {
  return (
    <div>
      <div class="container mb-5" id="skills">
        <h1
          class="text-center font-weight-bold"
          style={{ marginTop: '25%', textDecoration: 'underline' }}
        >
          Skills
        </h1>

        <div class="row" style={{ marginTop: '2%' }}>
          <div class="col-md-5 mt-5">
            HTML
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: '100%' }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                100%
              </div>
            </div>
            <br />
            CSS
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-success"
                role="progressbar"
                style={{ width: '96%' }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                96%
              </div>
            </div>
            <br />
            REACT.JS
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: '99%' }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                99%
              </div>
            </div>
            <br />
            NODE.JS
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-warning"
                role="progressbar"
                style={{ width: '98%' }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                98%
              </div>
            </div>
            <br />
            BOOTSTRAP
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: '97%' }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                97%
              </div>
            </div>
          </div>
          <div class="col-md-4 offset-md-3 mt-5">
            <button class="btn btn-outline-primary w-100">HTML</button>
            <br />
            <br />
            <button class="btn btn-outline-success w-100">CSS</button>
            <br />
            <br />
            <button class="btn btn-outline-info w-100">REACT.JS</button>
            <br />
            <br />
            <button class="btn btn-outline-warning w-100">NODE.JS</button>
            <br />
            <br />
            <button class="btn btn-outline-danger w-100">BOOTSTRAP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
