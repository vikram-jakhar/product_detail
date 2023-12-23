import pagelogo from "../assests/img/logo.png";
import headerimg from "../assests/img/header-img.png";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="d-none d-lg-block">
      <Container>
        <div className="d-flex align-items-center justify-content-between py-3">
          <img className=" pointer" src={pagelogo} alt="logo" />
          <img className="d-none d-lg-block" src={headerimg} alt="header-img" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
