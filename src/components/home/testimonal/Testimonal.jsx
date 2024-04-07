import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow' key={val.id}>
                <div className='box flex'>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    {/* Play button icon */}
                    <i className='fas fa-play-circle icon'></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
