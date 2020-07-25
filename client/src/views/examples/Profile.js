import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Badge,
  CardBody,
  TabPane,
  TabContent,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

import {useSelector} from 'react-redux'

const Profile =(props)=> {
  
  const profile = useSelector((state) => state.profileReducer);
  var name = props.match.params.name;
  var user = profile.users.filter((user) => user.name === name);
  user = user[0];


    return (
      <>
        <DemoNavbar />
        {console.log(props.match.params.name)}
        <main className="profile-page">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                      {user.skills.map((skill) => (
                        <Badge color="primary" pill className="mr-1">
                          {skill}
                        </Badge>
                      ))}
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                      {user.experience.map((expert)=>(
                       <h1>{expert.company}</h1> 
                      ))}
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>{user.name} </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {user.location}
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      {user.role}
                    </div>
                    <Row className="justify-content-center">
                      <div>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="twitter"
                          href={user.twitter}
                          target="_blank"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-twitter" />
                          </span>
                        </Button>
                      </div>

                      <div>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="github"
                          href={user.github}
                          target="_blank"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-github" />
                          </span>
                        </Button>
                      </div>
                    </Row>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          {user.bio}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                      <h1 className="display-4 mb-0">Experience</h1>
                        <Card>
                          <CardBody>
                            <TabContent>
                              <TabPane>
                                <h5>Paysmosmo</h5>
                                <h6>2017/02/10 - Now</h6>
                                <p className="description">
                                  <b>Position:</b> Developer
                                </p>
                                <p className="description">
                                  <b>Location:</b> Lagos
                                </p>
                                <p className="description">
                                  <b>Description:</b> eCommerce
                                </p>
                              </TabPane>
                            </TabContent>
                          </CardBody>
                          <CardBody>
                          <TabContent>
                            <TabPane>
                              <h5>TechEnd</h5>
                              <h6>2017/02/10 - Now</h6>
                              <p className="description">
                                <b>Position:</b> Developer
                              </p>
                              <p className="description">
                                <b>Location:</b> Lagos
                              </p>
                              <p className="description">
                                <b>Description:</b> IT
                              </p>
                            </TabPane>
                          </TabContent>
                        </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6">
                      <h1 className="display-4 mb-0">Education</h1>
                        <Card>
                          <CardBody>
                            <TabContent>
                              <TabPane>
                                <h5>University of Lagos</h5>
                                <h6>2015/02/10 - 2019/10/10</h6>
                                <p className="description">
                                  <b>Degree:</b> Bsc
                                </p>
                                <p className="description">
                                  <b>Field of Study:</b> Mathematics
                                </p>
                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
  }

export default Profile;
