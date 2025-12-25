import React from 'react'

export default function Contact() {

    function handleSubmit(e) {
    e.preventDefault(); // تمنع الريلود
    console.log("Form submitted!"); // هنا ممكن تعمل أي حاجة بالبيانات
    }
  return <>
    <div className='calc-vh'>
      <h1 className='mb-3 pt-4 text-center text text-d'>CONTACT COMPONENT</h1>

      <div className="d-flex align-items-center justify-content-center text-d">
        <div className="line dark"></div>
        <i className="fa-solid fa-star mx-3"></i>
        <div className="line dark"></div>
      </div>

      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-5 input-group">
                <input type="text" className="input" id="name" placeholder="userName"/>
                <label htmlFor="name">userName :</label>
              </div>

              <div className="mb-5 input-group">
                <input type="text" className="input" id="age" placeholder="userAge"/>
                <label htmlFor="age">userAge :</label>
              </div>

              <div className="mb-5 input-group">
                <input type="email" className="input" id="email" placeholder="userEmail"/>
                <label htmlFor="email">userEmail :</label>
              </div>

              <div className="mb-5 input-group">
                <input type="password" className="input" id="password" placeholder="userPassword"/>
                <label htmlFor="password">userPassword :</label>
              </div>

              <button type="submit" className="btn-bg-main">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}
