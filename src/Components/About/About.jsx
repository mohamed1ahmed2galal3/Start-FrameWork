import React from 'react'

export default function About() {
  return <>
      <div className=' bg-main'>
          <div className="d-flex justify-content-center align-items-center calc-vh flex-column text-center text-light py-5">
              <h1 className='mb-3 pt-4 text'>ABOUT COMPONENT</h1>
              <div className="d-flex align-items-center justify-content-center">
                  <div className="line bg-light"></div>
                  <i className="fa-solid fa-star mx-3"></i>
                  <div className="line bg-light"></div>
              </div>
              <div className="container text-start">
                <div className="row px-5">
                    <div className="col-md-6 ps-md-5">
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col-md-6 pe-5">
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </>
}
