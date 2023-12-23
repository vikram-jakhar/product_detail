import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import pagelogo from "../assests/img/logo.png";

const Secnav = () => {
  return (
    <div className="bg-nav pt-3">
      <Container>
        <Nav className="">
          <div className=" d-flex align-items-center justify-content-between w-100">
            <img src={pagelogo} alt="" className=" d-block d-lg-none" />

            <label for="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <input type="checkbox" id="menu-icon" hidden />
            <ul className=" d-flex align-items-end gap-4 mobile-view">
              <li><a className="fs-1lg black roboto fw-normal home" href="">
                HOME</a></li>
              <li><a className="fs-1lg black roboto fw-normal home" href="">
                SNEAKERS KOPEN
              </a></li>
              <li><a className="fs-1lg black roboto fw-normal home" href="">
                INTERVIEWS</a></li>
              <li><a className="fs-1lg black roboto fw-normal home" href="">
                SALE
              </a></li>
              <li><a className="fs-1lg black roboto fw-normal home" href="">
                SNEAKER VAN DE DAG</a></li>
              <li><a className="fs-1lg black roboto fw-normal home" href="">
                SNEAKER FORUM
              </a></li>
              <li><a className="fs-1lg black roboto fw-normal home" href="">
                BLOG</a></li>
            </ul>
          </div>
        </Nav>

      </Container>
    </div>
  )
}

export default Secnav