import React from "react"
// import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Contact a Creative Expert for Free</h1>
            <span>We'd love to assist you!</span>
          </div>
          <div className='right row'>
          <div className='phone-icon' style={{ display: 'inline-flex', alignItems: 'center' }}>
          <i className='fa fa-phone-alt'></i>
  <h1 style={{ margin: '0 0 0 25px' }}>Call +91 96418 17485</h1>
</div>
</div>

        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>FliqaIndia</h1>
            {/* <span>Follow Us On</span> */}
            <p>Follow Us On</p>
            
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
            <i className='fab fa-pinterest icon'></i>
            <p></p>
            <i className='fab fa-linkedin-in icon'></i>
            <i className='fab fa-whatsapp icon'></i>
          </div>
          <div className='box link'>
            <h3>Information</h3>
            <ul>
              <li>Contact Us</li>
              <li>Brand Ambassador</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Partner Login</li>
              <li>Billing Portal</li>
              <li>Project Status</li>
            </ul>
          </div>
          <div className='box link'>
            <h3> </h3>
            <ul>
            <li>About Us</li>
              <li>View My Album</li>
              <li>Editorial Team</li>
              <li>Collaboration</li>
              <li>Careers</li>
              <li>Apply Fliqa-Partner</li>
              <li>Help-Desk</li>
            </ul>
          </div>
          <div className='box'>
            {/* <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))} */}
          </div>
          <div className='box last'>
            <h3>Have any Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                <span style={{ margin: '0 0 0 25px' }}>New Market Complex, Ramnagar,
East Medinipur, West Bengal 721441, India</span>
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 96418 17485
              </li>
              {/* <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li> */}
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
        © 2023 FliqaIndia Corporation Inc. All rights reserved | This template is made with <i className='fa fa-heart'></i> by Rokkam Nikhila
        </p>
      </div>
    </>
  )
}

export default Footer
