import React from "react";
import {
  Col,
  Card,
  CardBody,
  TabContent,
  TabPane,
  Row,
  Badge,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";

const Developers = () => {
  return (
    <>
      <Col lg="6">
        <Card className="shadow">
          <CardBody>
            <TabContent>
              <Row>
                <Col sm="8">
                  <TabPane>
                    <p className="description">
                      <b>Name:</b> Abdul-Qudus Olajide
                    </p>
                    <p className="description">
                      <b>Role:</b> Instructor or Teacher
                    </p>
                    <p className="description">
                      <b>Location:</b> Lagos
                    </p>
                    <div>
                      <Badge color="primary" pill className="mr-1">
                        HTML
                      </Badge>
                      <Badge color="primary" pill className="mr-1">
                        CSS
                      </Badge>
                      <Badge color="primary" pill className="mr-1">
                        PHP
                      </Badge>
                    </div>
                  </TabPane>
                </Col>
                <Col sm="4">
                  <img
                    alt="..."
                    className="img-fluid rounded shadow-lg"
                    src={require("assets/img/theme/team-3-800x800.jpg")}
                    style={{ width: "100px", marginBottom: "10px" }}
                  />
                  <div>
                    <Button
                      className="btn-icon-only rounded-circle"
                      color="twitter"
                      href="https://twitter.com/jideabdqudus"
                      id="tooltip475038073"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-twitter" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip475038073">
                      Abdul-Qudus on Twitter
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon-only rounded-circle ml-1"
                      color="github"
                      href="https://github.com/jideabdqudus"
                      id="tooltip49550725"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip49550725">
                      Abdul-Qudus on Github
                    </UncontrolledTooltip>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col lg="4"></Col>
                <Col lg="4">
                  <Button color="info" size="sm" outline type="button">
                    <Link to="/profile-page">View Profile</Link>
                  </Button>
                </Col>
                <Col lg="4"></Col>
              </Row>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card className="shadow">
          <CardBody>
            <TabContent>
              <Row>
                <Col sm="8">
                  <TabPane>
                    <p className="description">
                      <b>Name:</b> Qoder Andre
                    </p>
                    <p className="description">
                      <b>Role:</b> Developer
                    </p>
                    <p className="description">
                      <b>Location:</b> Accra
                    </p>
                    <div>
                      <Badge color="primary" pill className="mr-1">
                        RUBY
                      </Badge>
                      <Badge color="primary" pill className="mr-1">
                        BOOTSTRAP
                      </Badge>
                      <Badge color="primary" pill className="mr-1">
                        C#
                      </Badge>
                    </div>
                  </TabPane>
                </Col>
                <Col sm="4">
                  <img
                    alt="..."
                    className="img-fluid rounded shadow-lg"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "100px", marginBottom: "10px" }}
                  />
                  <div>
                    <Button
                      className="btn-icon-only rounded-circle"
                      color="twitter"
                      href="https://twitter.com/jideabdqudus"
                      id="tooltip475038074"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-twitter" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip475038074">
                      Qoder on Twitter
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon-only rounded-circle ml-1"
                      color="github"
                      href="https://github.com/jideabdqudus"
                      id="tooltip495507257"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip495507257">
                      Qoder on Github
                    </UncontrolledTooltip>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col lg="4"></Col>
                <Col lg="4">
                  <Button color="info" size="sm" outline type="button">
                    <Link to="/profile-page">View Profile</Link>
                  </Button>
                </Col>
                <Col lg="4"></Col>
              </Row>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Developers;
