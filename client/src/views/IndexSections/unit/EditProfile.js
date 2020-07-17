import React, { useState } from "react";
import DashboardNav from "../layers/DashboardNav";

import classnames from "classnames";

import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormText,
  Form,
  Container,
  Row,
  Button,
  Col,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <>
      <DashboardNav />

      <div className="py-5 bg-secondary">
        <Container>
          <Button className="btn-1 mt-3" color="info" size="sm" type="button">
            <Link to="/dashboard">Go Back</Link>
          </Button>
          <h1>Edit Profile</h1>
          {/* Inputs (alternative) */}
          <Row>
            <Col lg="6" sm="6">
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  placeholder="Username"
                  type="text"
                />
                <FormText>
                  A unique name for your profile URL, full name, nickname.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
                <FormText>Give an idea of where you are at your career</FormText>
              </FormGroup>
            </Col>
            <Col lg="6" sm="6">
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  placeholder="Name"
                  type="text"
                />
                <FormText>Example help text that remains unchanged.</FormText>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EditProfile;
