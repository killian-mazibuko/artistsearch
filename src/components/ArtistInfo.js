import React from "react";
import { Container, Media, Row, Col } from "reactstrap";

export default function ArtistInfo(props) {
  return (
    <Row style={{ "margin-bottom": "15px" }}>
      <Container>
        <Media>
          <Col sm={4} style={{ padding: 0 }}>
            <Media left>
              <Media
                style={{ height: 50, width: 50 }}
                object
                src={props.artistInfo.image_url}
                alt={props.name}
              />
            </Media>
          </Col>
          <Col sm={8}>
            <Media body>Name: {props.artistInfo.name}</Media>
          </Col>
        </Media>
      </Container>
    </Row>
  );
}
