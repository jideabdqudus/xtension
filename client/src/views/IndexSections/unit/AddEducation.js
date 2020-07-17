import React from "react";
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
  import DashboardNav from "../layers/DashboardNav";
  


const AddEducation = () => {
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
          <Form>
            <Row>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="School"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Degree or Certification"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Program Description"
                    type="textarea"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Field of Study"
                    type="text"
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
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="toDate">To Date</Label>
                  <Input
                    className="form-control-alternative"
                    placeholder="Date"
                    id="toDate"
                    type="date"
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
