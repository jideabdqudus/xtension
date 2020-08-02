import React from "react";

import {
  Button,
  Container,
  Table,
  Row,
  Col,
} from "reactstrap";
import DashboardNav from "../layers/DashboardNav";
import { Link } from "react-router-dom";
import {useSelecor} from 'react-redux'
import SimpleFooter from "components/Footers/SimpleFooter";

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <main>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg bg-dark">
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      Your Dashboard <span>welcome, Jide.</span>
                    </h1>
                    <p className="lead text-white">
                      Last Visited on{" "}
                      <span className="text-muted">27/04/20</span>
                    </p>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-icon mb-2 mb-sm-0"
                        size="sm"
                        color="info"
                      >
                        <Link to="/edit-profile" style={{ color: "white" }}>
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Edit Profile</span>
                        </Link>
                      </Button>
                      <Button
                        className="btn-icon btn-icon mb-2 mb-sm-0 ml-1"
                        size="sm"
                        color="info"
                      >
                        <Link to="/add-experience" style={{ color: "white" }}>
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">
                            Add Experience
                          </span>
                        </Link>
                      </Button>
                      <Button
                        className="btn-icon btn-icon mb-2 mb-sm-0 ml-1"
                        size="sm"
                        color="info"
                      >
                        <Link to="/add-education" style={{ color: "white" }}>
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Add Education</span>
                        </Link>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>

          <section className="section section-lg ">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h3>Experience Credentials</h3>
                  <Table dark>
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Facebook</td>
                        <td>Developer</td>
                        <td>2019-Now</td>
                        <Button
                          className="btn-1 mt-3"
                          color="danger"
                          size="sm"
                          type="button"
                        >
                          Delete
                        </Button>
                      </tr>
                      <tr>
                        <td>Paysmosmo</td>
                        <td>Front End Dev</td>
                        <td>2017-2019</td>
                        <Button
                          className="btn-1 mt-3"
                          color="danger"
                          size="sm"
                          type="button"
                        >
                          Delete
                        </Button>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </section>

          <section>
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h3>Education Credentials</h3>
                  <Table dark>
                    <thead>
                      <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Years</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>University of Lagos</td>
                        <td>Bsc</td>
                        <td>2015-2019</td>
                        <Button
                          className="btn-1 mt-3"
                          color="danger"
                          size="sm"
                          type="button"
                        >
                          Delete
                        </Button>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg ">
            <Container>
              <Button color="danger" size="lg" type="button" className="ml-1">
                Delete Account
              </Button>
            </Container>
          </section>
        </div>
      </main>
      <SimpleFooter />
    </div>
  );
};

export default Dashboard;
