import React from 'react';
import basketball from '../image/project work/basketball-challenge.PNG';
import collegeWebsite from '../image/project work/college_website.PNG';
import covid from '../image/project work/covid.PNG';
import keepNotes from '../image/project work/keep-notes.PNG';
import foodOrdering from '../image/project work/food-ordering.PNG';
import todo from '../image/project work/todo.PNG';
import gym from '../image/project work/gym.PNG';

const Work = () => {
  return (
    <div>
      <div class="container-fluid mb-5" id="projects">
        <h1
          class="text-center font-weight-bold"
          style={{ marginTop: '25%', textDecoration: 'underline' }}
        >
          PERSONAL WORK
        </h1>
        <div class="row bg-dark" style={{ marginTop: '2%' }}>
          <div class="col-md-4 mt-5">
            <img src={basketball} alt="" class="img-fluid" />
          </div>
          <div class="col-md-4 mt-5">
            <img src={collegeWebsite} alt="" class="img-fluid" />
          </div>
          <div class="col-md-4 mt-5">
            <img src={covid} alt="" class="img-fluid" />
          </div>

          <div class="col-md-4 mt-5">
            <img src={foodOrdering} alt="" class="img-fluid" />
          </div>

          <div class="col-md-4 mt-5">
            <img src={gym} alt="" class="img-fluid" />
          </div>

          <div class="col-md-4 mt-5">
            <img src={keepNotes} alt="" class="img-fluid" />
          </div>

          <div class="col-md-4 offset-md-4 mt-5 mb-5">
            <img src={todo} alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
