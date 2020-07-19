import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  Row,
  Col,
  Container,
} from "reactstrap";

//core components
import DemoNavbar from "components/Navbars/DemoNavbar";
import Developers from "../layers/Developers";

const DevelopersList = () => {
  return (
    <>
      <DemoNavbar />
      <main>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="12">
                    <h1 className="display-3 text-white">
                      Developers List <span>satisfy your tech needs</span>
                    </h1>
                    <hr />
                    <br />
                    <Row className="justify-content-center">
                      <Developers />
                    </Row>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 1560 100"
                x="0"
                y="0"
              >
                <polygon className="fill-white" points="260 0 1460 100 0 100" />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
      </main>
    </>
  );
};

export default DevelopersList;
