import Header from "./Header";

export default function Services() {
    return (
      <>
      
        <div className="hero_area">
          <div className="hero_bg_box">
            <div className="img-box">
              <img src="images/hero-bg.jpg" alt="Hero background" />
            </div>
          </div>
        <Header/>
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
                      <svg
                        enableBackground="new 0 0 512 512"
                        height="512"
                        viewBox="0 0 512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG Content */}
                      </svg>
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
                    <div className="img-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                        {/* SVG Content */}
                      </svg>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                        {/* SVG Content */}
                      </svg>
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
        </div>
      </>
    );
  }
  