import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Typography from "./IndexSections/Typography.js";
import Login from "./IndexSections/Login.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <section className="section section-components">
            <Container>
              <Typography />
            </Container>
          </section>
          <Login />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
