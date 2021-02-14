import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { PropTypes } from "prop-types";

const FooterMap = props => {
  const mapStyles = {
    width: "100%",
    height: "100%"
  };
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const handleScriptLoad = () => {
    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    var geocoder = new google.maps.Geocoder();
    let address = props.merchant.address.address + props.merchant.address.city
    geocoder.geocode({
      'address': address
    }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        // console.log(results[0].geometry.location.lat())
        // console.log(results[0].geometry.location.lng())
        setLatitude(results[0].geometry.location.lat());
        setLongitude(results[0].geometry.location.lng());
      } else {
      }
    });
  }
  // setTimeout(() => {
  handleScriptLoad()
  // }, 2000);
  return (

    <div>
      {
        latitude !== 0 && longitude !== 0 &&
        <Map
          google={props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{ lat: latitude, lng: longitude }}
        >
          <Marker
            position={{ lat: latitude, lng: longitude }}
            icon={{
              url: `${process.env.PUBLIC_URL + "/assets/img/icon-img/2.png"}`
            }}
            animation={props.google.maps.Animation.BOUNCE}
          />
        </Map>
      }
    </div>


  );
};

FooterMap.propTypes = {
  google: PropTypes.object
};

export default GoogleApiWrapper({
  apiKey: window._env_.APP_MAP_API_KEY
})(FooterMap);
