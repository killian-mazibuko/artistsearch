import React, { useEffect, useState } from "react";
import { Card, CardHeader, ListGroup, ListGroupItem, Button } from "reactstrap";

export default function EventToShow(props) {
  const [eventData, setEventData] = useState({});
  useEffect(() => {
    setEventData(
      props.eventInfo.filter((eventData, index) => index === props.idx)[0]
    );
  }, [props.idx, props.eventInfo]);
  const addFavClickHandler = (e) => {
    props.addToFavorites(eventData);
  };

  const removeFavClickHandler = (e) => {
    props.removeFavorite(eventData);
  };

  return (
    <Card>
      <CardHeader>
        <h6>Selected Event Information</h6>
      </CardHeader>
      {eventData ? (
        <ListGroup flush>
          <ListGroupItem>
            Artist Id: {eventData.artist_id}
            <br />
            Id: {eventData.id}
            <br />
            Date:{" "}
            {new Date(eventData.starts_at).toLocaleString("en-GB", {
              timeZone: "UTC",
            })}
          </ListGroupItem>
          {eventData.venue ? (
            <ListGroupItem>
              City : {eventData.venue.city}
              <br />
              Country : {eventData.venue.country}
              <br />
              Latitude : {eventData.venue.latitude}
              <br />
              Longitude : {eventData.venue.longitude}
              <br />
              Location : {eventData.venue.location}
              <br />
              Name : {eventData.venue.name}
              <br />
              Postal Code: {eventData.venue.postal_code}
              <br />
              Region: {eventData.venue.regio}
              <br />
              Street Address: {eventData.venue.street_address}
            </ListGroupItem>
          ) : (
            <></>
          )}
          <ListGroupItem>
            {!props.favorites.find((fav) => fav.id === eventData.id) ? (
              <Button block onClick={addFavClickHandler}>
                Add To Favourites
              </Button>
            ) : (
              <Button block onClick={removeFavClickHandler}>
                Remove From Favourites
              </Button>
            )}
            {eventData.offers ? (
              eventData.offers.map((offer) => (
                <>
                  <a href={offer.url}>Ticket</a>
                  <br />
                  Status:{" "}
                  {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
                </>
              ))
            ) : (
              <></>
            )}
          </ListGroupItem>
        </ListGroup>
      ) : (
        <></>
      )}
    </Card>
  );
}
