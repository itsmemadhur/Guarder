import Header from "./Header";

export default function About() {
  return (
    <>
        <div className="hero_area">
          <div className="hero_bg_box">
            <div className="img-box">
              <img src="images/hero-bg.jpg" alt="Hero background" />
            </div>
          </div>
          <Header />
          <section className="about_section layout_padding abc">
            <div className="container">
              <div className="row">
                <div className="col-md-6 px-0">
                  <div className="img_container">
                    <div className="img-box">
                      <img src="images/about-img.jpg" alt="About us" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 px-0">
                  <div className="detail-box">
                    <div className="heading_container">
                      <h2>Who Are We?</h2>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit.
                    </p>
                    <div className="btn-box">
                      <a href="/">Read More</a>
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


