import React from 'react'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

export default function Portfolio() {
  return <>


  <div className='calc-vh'>
    <h1 className='mb-3 pt-4 text-center text text-d'>PORTOFOLIO COMPONENT</h1>
            <div className="d-flex align-items-center justify-content-center text-d">
                <div className="line dark"></div>
                <i className="fa-solid fa-star mx-3"></i>
                <div className="line dark"></div>
            </div>
            <div className="container py-3">
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="card ">
                            <img src={port1} className="card-img-top" alt="..."/>
                            <div className="layer " data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                <i className="fa-solid fa-plus fa-5x text-light"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={port2} className="card-img-top" alt="..."/>
                            <div className="layer" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                <i className="fa-solid fa-plus fa-5x text-light"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={port3} className="card-img-top" alt="..."/>
                            <div className="layer " data-bs-toggle="modal" data-bs-target="#exampleModal3">
                                <i className="fa-solid fa-plus fa-5x text-light"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={port1} className="card-img-top" alt="..."/>
                            <div className="layer " data-bs-toggle="modal" data-bs-target="#exampleModal4">
                                <i className="fa-solid fa-plus fa-5x text-light"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={port2} className="card-img-top" alt="..."/>
                            <div className="layer " data-bs-toggle="modal" data-bs-target="#exampleModal5">
                                <i className="fa-solid fa-plus fa-5x text-light"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={port3} className="card-img-top" alt="..."/>
                            <div className="layer " data-bs-toggle="modal" data-bs-target="#exampleModal6">
                                <i className="fa-solid fa-plus fa-5x text-light"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>

  {/* Modal */}
  <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-0 ">
          <img src={port1} alt="" className='w-100'/>
        </div>
      </div>
    </div>
  </div>

  <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-0 ">
          <img src={port2} alt="" className='w-100'/>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-0 ">
          <img src={port3} alt="" className='w-100'/>
        </div>
      </div>
    </div>
  </div>



  <div className="modal fade" id="exampleModal4" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-0 ">
          <img src={port1} alt="" className='w-100'/>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModal5" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-0 ">
          <img src={port2} alt="" className='w-100'/>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="exampleModal6" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body p-0 ">
          <img src={port3} alt="" className='w-100'/>
        </div>
      </div>
    </div>
  </div>




  </>
}
