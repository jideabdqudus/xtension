import React from "react";

import {
  FormGroup,
  Input,
  Form,
  Container,
  Row,
  Table,
  Button,
  Col,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
import DashboardNav from "../layers/DashboardNav";

import { useSelector, useDispatch } from "react-redux";

const AddExperience = () => {
  const profile = useSelector((state) => state.profileReducer);

  const onSubmit = () => {};

  const onChange = () => {};
  return (
    <>
      <DashboardNav />

      <div className="py-5 bg-secondary">
        <Container>
          <Button className="btn-1 mt-3" color="info" size="sm" type="button">
            <Link to="/dashboard">Go Back</Link>
          </Button>
          <h1>Add Experience</h1>
          {/* Inputs (alternative) */}
          <Form onSubmit={onSubmit}>
            <Row>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Company"
                    name="company"
                    onChange={onChange}
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Job Position"
                    name="position"
                    onChange={onChange}
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Job Description"
                    name="description"
                    onChange={onChange}
                    type="textarea"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Location"
                    name="location"
                    onChange={onChange}
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
                    name="start"
                    onChange={onChange}
                    type="date"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="toDate">To Date</Label>
                  <Input
                    className="form-control-alternative"
                    placeholder="Date"
                    id="toDate"
                    name="end"
                    onChange={onChange}
                    type="date"
                  />
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" name="check" id="currentJob" />
                  <Label for="currentJob" check>
                    Current Job
                  </Label>
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Button color="success" type="submit" className="btn-1">
              Submit
            </Button>
          </Form>

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
                    {profile.users.experience.map((expert) => (
                      <tbody>
                        <tr>
                          <td>{expert.company}</td>
                          <td>{expert.position}</td>
                          <td>{expert.start} till {expert.end}</td>
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
                    ))}
                  </Table>
                </Col>
              </Row>
            </Container>
          </section>
        </Container>
      </div>
    </>
  );
};

export default AddExperience;
