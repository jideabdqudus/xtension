import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import DashboardNav from "../layers/DashboardNav";
import { Link } from "react-router-dom";

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
                            <i className="ni ni-cloud-download-95" />
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
                            <i className="ni ni-cloud-download-95" />
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
          {/* 1st Hero Variation */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
