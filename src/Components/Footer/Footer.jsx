import React from 'react'

export default function Footer() {
  return <>
  <footer className="bg-body-tertiary text-center pt-4 text-light position-relative ">
    <div className="container p-4">
      <div className="row justify-space-between m-4 text-center">
        <div className="col-md-4 ">
            <h3 className='pt-3'>LOCATION</h3>
            <p className='mb-3'>2215 John Daniel Drive</p>
            <p className='mb-3'>Clark, MO 65243</p>
        </div>
        <div className="col-md-4 ">
            <h3 className='pt-3'>AROUND THE WEB</h3>
            <div className="d-flex justify-content-center gap-3 mt-3">
                <div className="circle">
                <i className="fa-brands fa-facebook-f"></i>
                </div>

                <div className="circle">
                <i className="fa-brands fa-twitter"></i>
                </div>

                <div className="circle">
                <i className="fa-brands fa-linkedin-in"></i>
                </div>

                <div className="circle">
                <i className="fa-solid fa-globe"></i>
                </div>
            </div>
        </div>
        <div className="col-md-4 ">
            <h3 className='pt-3'>ABOUT FREELANCER</h3>
            <p className='mb-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        
      </div>
    </div>
    <div className="text-center p-4 dark">
      Copyright © Your Website 2021
    </div>
  </footer>
  </>
}
