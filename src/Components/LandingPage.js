import React from 'react';


const LandingPage = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h5 class="modal-title" id="exampleModalLabel">
                Contact Details:-
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body ml-5">
              <h5>Mobile : 7053617608</h5>
              <h5>Email : kkamal714@gmail.com</h5>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container mb-5" id="home">
        <div class="row">
          <div class="col-md-5 col-12 col-sm-12 mt-5">
            <img src="https://res.cloudinary.com/kkamal714/image/upload/v1593164862/Portfolio/kamal2_zxijak.png" alt="" class="img-fluid" />
          </div>
          <div class="col-md-5 offset-md-2 text-center info-div">
            <h1>HEY</h1>
            <h2>MY NAME IS KAMAL</h2>
            <h3>I AM A FULL STACK DEVELOPER</h3>
            <button
              class="btn btn-outline-primary"
              type="button"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              HIRE ME
            </button>

            <a
              href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:ac2f1865-4f53-443d-b7ad-a04883e8cebd"
              class="btn btn-outline-success ml-3"
            >
              GET CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
