import React, { useState } from "react";
import {
  FormGroup,
  Input,
  Form,
  Container,
  Row,
  Button,
  Col,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import DashboardNav from "../layers/DashboardNav";

import { useDispatch } from "react-redux";

import { addEducation } from "../../../actions/dashboardActions";

const AddEducation = () => {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    start: "",
    end: "",
    field: "",
  });
  const dispatch = useDispatch(addEducation(education));

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addEducation(education));
  };

  const onChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  return (
    <>
      <DashboardNav />

      <div className="py-5 bg-secondary">
        <Container>
          <Button className="btn-1 mt-3" color="info" size="sm" type="button">
            <Link to="/dashboard">Go Back</Link>
          </Button>
          <h1>Add Education</h1>
          {/* Inputs (alternative) */}
          <Form onSubmit={onSubmit}>
            <Row>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="School"
                    type="text"
                    name="school"
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Degree or Certification"
                    type="text"
                    name="degree"
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Field of Study"
                    name="field"
                    type="text"
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Label for="fromDate">From Date</Label>
                  <Input
                    className="form-control-alternative"
                    placeholder="Date"
                    id="fromDate"
                    type="date"
                    name="start"
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="toDate">To Date</Label>
                  <Input
                    className="form-control-alternative"
                    placeholder="Date"
                    id="toDate"
                    type="date"
                    name="end"
                    onChange={onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Button color="success" type="submit" className="btn-1">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default AddEducation;
