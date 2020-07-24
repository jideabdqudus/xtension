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
} from "reactstrap";
import { Link } from "react-router-dom";

import { useSelector} from "react-redux";

const Developers = () => {
  const profile = useSelector((state) => state.profileReducer);

  return (
    <>
      {profile.users.map((user, index) => (
        <Col lg="6">
          <Card className="shadow">
            <CardBody>
              <TabContent>
                <Row>
                  <Col sm="8">
                    <TabPane>
                      <p className="description">
                        <b>Name:</b> {user.name}
                      </p>
                      <p className="description">
                        <b>Role:</b> {user.role}
                      </p>
                      <p className="description">
                        <b>Location:</b> {user.location}
                      </p>
                      <div>
                        {user.skills.map((skill) => (
                          <Badge color="primary" pill className="mr-1">
                            {skill}
                          </Badge>
                        ))}
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
                        href={user.twitter}
                        id="tooltip475038073"
                        target="_blank"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-twitter" />
                        </span>
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="github"
                        href={user.github}
                        id="tooltip49550725"
                        target="_blank"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-github" />
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "20px" }}>
                  <Col lg="4"></Col>
                  <Col lg="4">
                    <Button color="info" size="sm" outline type="button">
                      <Link to={`/profile-page/${user.id}`}>View Profile</Link>
                    </Button>
                  </Col>
                  <Col lg="4"></Col>
                </Row>
              </TabContent>
            </CardBody>
          </Card>
          <br />
        </Col>
      ))}{" "}
    </>
  );
};

export default Developers;
