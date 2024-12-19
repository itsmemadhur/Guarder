import Header from "./Header";

export default function Home()
{
    return(
		<>
		<div className="hero_area">
         <div className="hero_bg_box">
          <div className="img-box">
             <img src="images/hero-bg.jpg" alt="" />
          </div>
           </div>
		   <Header />
		   <section className=" slider_section ">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Your Saftey <br />
                      <span>
                        Our Responsibility
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Read more </a>
                      <a href="" className="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Your Saftey <br/>
                      <span>
                        Our Responsibility
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Read more </a>
                      <a href="" className="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Your Saftey <br />
                      <span>
                        Our Responsibility
                      </span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn-1"> Read more </a>
                      <a href="" className="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container idicator_container">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
           </section>
          </div>
		   <section className="about_section layout_padding">
            <div className="container">
            <div className="row">
            <div className="col-md-6 px-0">
          <div className="img_container">
            <div className="img-box">
              <img src="images/about-img.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 px-0">
          <div className="detail-box">
            <div className="heading_container ">
              <h2>
                Who Are We?
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit
            </p>
            <div className="btn-box">
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
		
      </div>
    </div>
  </section>
  <section className="service_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>Our Services</h2>
              </div>
              <div className="row">
                {/* Service 1 */}
                <div className="col-md-4">
                  <div className="box">
                    <div className="img-box">
                      {/* <svg
                        enableBackground="new 0 0 512 512"
                        height="512"
                        viewBox="0 0 512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                       </svg> */}
                       <img src="images/s1.png" alt="" height={80} width={100}/>
                       

                        {/* SVG Content */}
                      

                    </div>
                    <div className="detail-box">
                      <h6>Home Security</h6>
                      <p>
                        Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.
                      </p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
  
                {/* Service 2 */}
                <div className="col-md-4">
                  <div className="box">
                    <div className="img-box ">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                      </svg> */}
                      <img src="images/s2.png" alt="" height={80} width={100}/>

                        {/* SVG Content */}
                    </div>
                    <div className="detail-box">
                      <h6>Office Security</h6>
                      <p>
                        Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.
                      </p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
  
                {/* Service 3 */}
                <div className="col-md-4">
                  <div className="box">
                    <div className="img-box">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                      </svg> */}
                      <img src="images/s3.png" alt="" height={80} width={100}/>

                        {/* SVG Content */}
                    </div>
                    <div className="detail-box">
                      <h6>Network Security</h6>
                      <p>
                        Minima consequatur architecto eaque assumenda ipsam itaque quia eum in doloribus debitis impedit ut minus tenetur corrupti excepturi ullam.
                      </p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- client section --> */}

  <section className="client_section layout_padding">
    <div className="container ">
      <div className="heading_container heading_center">
        <h2>
          What is says our clients
        </h2>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box">
              <div className="img-box">
                <img src="images/client.png" alt=""/>
              </div>
              <div className="detail-box">
                <h4>
                  Minim Veniam
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="box">
              <div className="img-box">
                <img src="images/client.png" alt=""/>
              </div>
              <div className="detail-box">
                <h4>
                  Minim Veniam
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="box">
              <div className="img-box">
                <img src="images/client.png" alt=""/>
              </div>
              <div className="detail-box">
                <h4>
                  Minim Veniam
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end client section --> */}
       {/* <!-- contact section --> */}

<section className="contact_section layout_padding">
  <div className="contact_bg_box">
    <div className="img-box">
      <img src="images/contact-bg.jpg" alt=""/>
    </div>
  </div>
  <div className="container">
    <div className="heading_container heading_center">
      <h2>
        Get In touch
      </h2>
    </div>
    <div className="">
      <div className="row">
        <div className="col-md-7 mx-auto">
          <form action="#">
            <div className="contact_form-container">
              <div>
                <div>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email " />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="">
                  <input type="text" placeholder="Message" className="message_input" />
                </div>
                <div className="btn-box ">
                  <button type="submit">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- end contact section --> */}
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

  </>
	)
}

