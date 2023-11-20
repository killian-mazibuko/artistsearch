import React, { useState } from "react";
import { Button } from "reactstrap";

export default function EventDetails(props) {
  console.log(props.eventInfo);
  const clickHandler = (e, idx) => {
    props.updateEventToShow(idx);
  };

  if (Array.isArray(props.eventInfo)) {
    return props.eventInfo.map((eventInformation, idx) => (
      <div key="{eventInformation.id}">
        <Button
          id={idx + 1}
          className="button-sm-block"
          color="success"
          block
          onClick={(e) => clickHandler(e, idx)}
        >
          Event #{idx + 1}
        </Button>
      </div>
    ));
  } else {
    return <></>;
  }
}
