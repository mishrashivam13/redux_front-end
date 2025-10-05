import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Hero = () => {
  return (
    <MDBCarousel showIndicators showControls fade>
      {/* Slide 1 */}
      <MDBCarouselItem itemId={1}>
        <img
          src="banner.png"
          className="d-block w-100"
          alt="OnePlus Phone"
          style={{ height: "450px", objectFit: "cover" }}
        />
        <div className="carousel-caption d-none d-md-block">
          <h3 className="fw-bold text-light">OnePlus — Speed Redefined ⚡</h3>
          <p className="text-light">
            Experience next-level performance and style.
          </p>
        </div>
      </MDBCarouselItem>

      {/* Slide 2 */}
      <MDBCarouselItem itemId={2}>
        <img
          src="/banner4.png"
          className="d-block w-100"
          alt="Camera"
          style={{ height: "450px", objectFit: "fill" }}
        />
        <div className="carousel-caption d-none d-md-block">
          <h3 className="fw-bold text-light">Capture Every Detail 📸</h3>
          <p className="text-light">Crystal clear shots, every single time.</p>
        </div>
      </MDBCarouselItem>

      {/* Slide 3 */}
      <MDBCarouselItem itemId={3}>
        <img
          src="/banner3.png"
          className="d-block w-100"
          alt="Exotic Fruits"
          style={{ height: "450px", objectFit: "cover" }}
        />
        <div className="carousel-caption d-none d-md-block">
          <h3 className="fw-bold text-light">Bold Colors, Modern Feel 🌈</h3>
          <p className="text-light">
            Bring energy to your creativity.
          </p>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
};

export default Hero;
