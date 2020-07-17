import React from "react";

const AddEducation = () => {
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
          <Form>
            <Row>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Company"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Job Title"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Job Description"
                    type="textarea"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    placeholder="Location"
                    type="text"
                  />
                  <FormText>City or State (e.g Lagos)</FormText>
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
        </Container>
      </div>
    </>
  );
};

export default AddEducation;
