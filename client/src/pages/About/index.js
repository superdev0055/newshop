import React                    from "react";
import { Col, Row, Container }  from "../../components/Grid";
import Jumbotron                from "../../components/Jumbotron";
import "./style.css"

const About = () =>
    <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">About</h1>
              <h1 className="text-center">
                <p>Conversation is an eliptical, engaging, and unpredictable process, 
                  driving interactions that may be all at once intuitive, cognitive, relational, transactional ...</p>
                  <p> A conversational ui can do things other software couldn’t even dream of. Like engaging 99% of your customers in under 1 minute, improving conversion by 240% overnight or shortening your sales cycle by 3x.
                    This market segment shows no signs of slowing down either. In 2018, app revenue reached a staggering $92 billion. That’s an increase from $77 billion from the year before.
                    CUX makes for a convenient and profitable interface.</p>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
    </Container>
  
export default About;
