import React, { useState } from "react";
import DashboardNav from "../layers/DashboardNav";

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
} from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addProfile } from "../../../actions/profileActions";

const EditProfile = () => {
  const [edit, setEdit] = useState({
    name: "",
    username: "",
    role: "",
    location: "",
    skills: "",
    bio: "",
    twitter: "",
    github: "",
  });

  const dispatch = useDispatch(addProfile(edit));

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addProfile(edit));
  };

  const onChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

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
          <Form onSubmit={onSubmit}>
            <Row>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Your Name"
                    name="name"
                    onChange={onChange}
                    type="text"
                  />
                  <br />
                  <Input
                    className="form-control-alternative"
                    placeholder="Username"
                    name="username"
                    onChange={onChange}
                    type="text"
                  />
                  <FormText>
                    A unique name for your profile URL, full name, nickname.
                  </FormText>
                </FormGroup>
              </Col>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    type="select"
                    name="role"
                    id="exampleSelect"
                    onChange={onChange}
                  >
                    <option>*Select Proffesional Status</option>
                    <option>Developer</option>
                    <option>Manager</option>
                    <option>Student or Learning</option>
                    <option>Instructor or Teacher</option>
                    <option>Intern</option>
                    <option>Other</option>
                  </Input>
                  <FormText>
                    Give an idea of where you are at your career
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Location"
                    name="location"
                    onChange={onChange}
                    type="text"
                  />
                  <FormText>City or State (e.g Lagos)</FormText>
                </FormGroup>
              </Col>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Skills"
                    name="skills"
                    onChange={onChange}
                    type="text"
                  />
                  <FormText>
                    Please use comma seperated values e.g (HTML, CSS, PHP,
                    Graphics, Maths)
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Bio"
                    name="bio"
                    onChange={onChange}
                    type="textarea"
                  />
                  <FormText>Tell us a little bit about yourself</FormText>
                </FormGroup>
              </Col>
              <Col lg="6" sm="6">
                <FormGroup>
                  <hr className="mb-1 mt-1" />
                  <FormText className="mb-3">Add social network links</FormText>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <span className="fa fa-github"></span>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Github Username"
                      name="github"
                      onChange={onChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <span className="fa fa-twitter"></span>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Twitter Username"
                      name="twitter"
                      onChange={onChange}
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Button color="success" type="submit" className="btn-1">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default EditProfile;
