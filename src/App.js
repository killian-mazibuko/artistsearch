import "./App.css";
import React, { useState, useEffect } from "react";
import { Jumbotron } from "reactstrap";
import ArtistSearch from "./components/ArtistSearch";
import ArtistInfo from "./components/ArtistInfo";
import EventDetails from "./components/EventDetails";
import axios from "axios";
import EventToShow from "./components/EventToShow";
import Favorites from "./components/Favorites";

function App() {
  const [searchText, setSearchText] = useState("");
  const [artistInformation, setArtistInformation] = useState({});
  const [eventInformation, setEventInformation] = useState([]);
  const [eventToShow, setEventToShow] = useState(-1);
  const [favorites, setFavorites] = useState([]);
  const updateText = (text) => {
    setSearchText(text);
  };

  const addToFavorites = (eventD) => {
    console.log("Event D: ", eventD);
    setFavorites((previousState) => {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...previousState, eventD])
      );
      return [...previousState, eventD];
    });
  };

  const removeFavorite = (eventD) => {
    setFavorites((previousState) => {
      localStorage.setItem(
        "favorites",
        JSON.stringify(previousState.filter((fav) => fav.id != eventD.id))
      );
      return previousState.filter((fav) => fav.id != eventD.id);
    });
  };

  useEffect(() => {
    async function getArtistData() {
      try {
        const artistData = await axios.get(
          "https://rest.bandsintown.com/artists/" + searchText + "?app_id=123"
        );
        console.log(artistData.data);
        setArtistInformation(artistData.data);
      } catch (err) {
        console.error(err);
      }
    }

    async function getEventData() {
      try {
        const eventData = await axios.get(
          "https://rest.bandsintown.com/artists/" +
            searchText +
            "/events?app_id=123"
        );
        console.log(eventData.data);
        setEventInformation(eventData.data);
      } catch (err) {
        console.error(err);
      }
    }
    getArtistData();
    getEventData();
  }, [searchText]);

  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
    }
  }, []);

  return (
    <div className="container">
      <Jumbotron style={{ "background-color": "light-blue" }}>
        <div className="row">
          <div className="col-12">
            <h1 style={{ margin: "auto", width: "50%" }}>Artist Search</h1>
          </div>
        </div>
      </Jumbotron>
      <div className="row">
        <div className="col-4">
          <ArtistSearch updateText={updateText} />
          {artistInformation.name ? (
            <ArtistInfo artistInfo={artistInformation} />
          ) : (
            <></>
          )}
          <EventDetails
            eventInfo={eventInformation}
            updateEventToShow={setEventToShow}
          />
        </div>
        <div className="col-4">
          {" "}
          <EventToShow
            eventInfo={eventInformation}
            idx={eventToShow}
            favorites={favorites}
            addToFavorites={addToFavorites}
            removeFavorite={removeFavorite}
          />
        </div>
        <div className="col-4">
          <Favorites favorites={favorites} />
        </div>
      </div>
    </div>
  );
}

export default App;
