import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        {/* Display titles */}
        <Row className="py-3 align-items-center">
          <Col sm="9">
            <h1 className="display-1 mb-0">Xtensions</h1>
          </Col>
        </Row>
        <Row className="py-3 align-items-center">
          <Col sm="9">
            <div>
              <p className="lead text-muted">
                Receive personalized Africa friendly remote opportunities based
                on your skills & preferences delivered to your inbox every week.
                <br />
                We are building a community of highly vetted and pre-screened
                technical talents across Africa looking to take their skills
                global and connecting them to opportunities in Europe, Canada &
                Africa.
              </p>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Typography;
