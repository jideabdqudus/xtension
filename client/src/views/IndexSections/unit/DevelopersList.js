import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Button,
  TabContent,
  TabPane,
  Row,
  Col,
  Container,
} from "reactstrap";

//core components
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";

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
                    <hr/>
                    <br/>
                    <Row className="justify-content-center">
                      <Col lg="6">
                        <Card className="shadow">
                          <CardBody>
                            <TabContent>
                              <TabPane>
                                <p className="description">
                                  Raw denim you probably haven't heard of them
                                  jean shorts Austin. Nesciunt tofu stumptown
                                  aliqua, retro synth master cleanse. Mustache
                                  cliche tempor, williamsburg carles vegan
                                  helvetica. Reprehenderit butcher retro
                                  keffiyeh dreamcatcher synth.
                                </p>
                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="shadow">
                          <CardBody>
                            <TabContent>
                              <TabPane>
                                <p className="description">
                                  Raw denim you probably haven't heard of them
                                  jean shorts Austin. Nesciunt tofu stumptown
                                  aliqua, retro synth master cleanse. Mustache
                                  cliche tempor, williamsburg carles vegan
                                  helvetica. Reprehenderit butcher retro
                                  keffiyeh dreamcatcher synth.
                                </p>
                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </Card>
                      </Col>
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
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
      </main>
      <SimpleFooter />
    </>
  );
};

export default DevelopersList;
