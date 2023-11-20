import React, { useState } from "react";
import { Form, Input, Label, Row, Col, Button } from "reactstrap";

export default function ArtistSearch(props) {
  const [text, setText] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.updateText(text);
  };
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <Form className="form" onSubmit={(e) => onSubmitHandler(e)}>
      <Row className="form-group">
        <Label md={4} htmlFor="query">
          Search Text:
        </Label>
        <Col md={4}>
          <Input
            name="query"
            type="text"
            value={text}
            onChange={(e) => onChangeHandler(e)}
          />
        </Col>
        <Col md={4}>
          <Button className="bg-primary" block type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
