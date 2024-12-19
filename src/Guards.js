import React from 'react'
import Header from './Header'

export default function Guards() {
  return (
    <>
    {/* <body className="sub-page"> */}
            <div className="hero_area">
              <div className="hero_bg_box">
                <div className="img-box">
                  <img src="images/hero-bg.jpg" alt="Hero background" />
                </div>
              </div>
              <Header />
      {/* <!-- Guards section --> */}

<section className="team_section layout_padding abc">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>
        Our Guards
      </h2>
      <p>
        Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris
        iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
      </p>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-6 mx-auto ">
        <div className="box">
          <div className="img-box">
            <img src="images/t1.jpg" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Martin Anderson
            </h5>
            <h6 className="">
              supervisor
            </h6>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 mx-auto ">
        <div className="box">
          <div className="img-box">
            <img src="images/t2.jpg" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Denny Butler
            </h5>
            <h6 className="">
              supervisor
            </h6>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 mx-auto ">
        <div className="box">
          <div className="img-box">
            <img src="images/t3.jpg" alt=""/>
          </div>
          <div className="detail-box">
            <h5>
              Nathan Mcpherson
            </h5>
            <h6 className="">
              supervisor
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div className="btn-box">
      <a href="">
        View All
      </a>
    </div>
  </div>
</section>

{/* <!-- End Guards section --> */}
    
    </div>
    {/* </body> */}
    </>
  )
}
