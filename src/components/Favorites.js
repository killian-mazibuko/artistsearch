import React from "react";
import {
  Card,
  Media,
  CardHeader,
  Container,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";

export default function Favourites(props) {
  return (
    <Card>
      <CardHeader>
        <h6>Favourites</h6>
      </CardHeader>
      <ListGroup flush>
        {Array.isArray(props.favorites) ? (
          props.favorites.map((favorite) => (
            <ListGroupItem>
              <Row style={{ "margin-bottom": "15px" }}>
                <Container>
                  <Media>
                    <Col sm={4} style={{ padding: 0 }}>
                      <Media left>
                        <Media
                          object
                          style={{ height: 50, width: 50 }}
                          src={require("./star.png")}
                        />
                      </Media>
                    </Col>
                    <Col sm={8}>
                      <Media body>Event ID: {favorite.id}</Media>
                    </Col>
                  </Media>
                </Container>
              </Row>
            </ListGroupItem>
          ))
        ) : (
          <></>
        )}
      </ListGroup>
    </Card>
  );
}
