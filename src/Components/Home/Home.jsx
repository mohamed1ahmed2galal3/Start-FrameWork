import React from 'react'
import main from '../../Assets/avataaars.svg'

export default function Home() {
  return <>
    <div className=' bg-main'>
        <div className="d-flex justify-content-center align-items-center calc-vh flex-column text-center text-light py-5">
            <div className="w-250px">
                <img src={main} alt="main" className='img-fluid w-100 mb-4'/>
            </div>
            <h1 className='mb-3 pt-4 text'>START FRAMEWORK</h1>
            <div className="d-flex align-items-center justify-content-center">
                <div className="line bg-light"></div>
                <i className="fa-solid fa-star mx-3"></i>
                <div className="line bg-light"></div>
            </div>
            <p className='mt-3 '>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  </>
}