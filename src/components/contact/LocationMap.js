import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { PropTypes } from "prop-types";

const FooterMap = props => {
  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{ lat: props.latitude, lng: props.longitude }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
        icon={{
          url: `${process.env.PUBLIC_URL + "/assets/img/icon-img/2.png"}`
        }}
        animation={props.google.maps.Animation.BOUNCE}
      />
    </Map>
  );
};

FooterMap.propTypes = {
  google: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws"
})(FooterMap);
