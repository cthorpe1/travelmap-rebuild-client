import React from "react";
import { connect } from "react-redux";
import { Marker } from "react-leaflet";
import { setActiveMarker } from "../../actions/markerActions";
import MarkerInfoModal from "../MarkerInfoModal/MarkerInfoModal.js";
import countries from "../../utilities/countries.json";
const MarkerList = props => {
  const setActiveMarker = e => {
    let coords = [e.latlng.lat, e.latlng.lng];
    let activeMarker = countries.find(country => {
      return country.latlng[0] === coords[0] && country.latlng[1] === coords[1];
    });
    activeMarker.dbId = e.target.options.marker_id;
    props.setActiveMarker(activeMarker);
  };
  return (
    <div>
      <ul>
        {props.markers.topLevelMarkers &&
          props.markers.topLevelMarkers.map((marker, i) => {
            return (
              <Marker
                key={i}
                position={marker.coordinates}
                onClick={setActiveMarker}
                marker_id={marker._id}
              />
            );
          })}
      </ul>
      {props.markers.activeMarker.isActive ? <MarkerInfoModal /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    markers: state.markers
  };
};

const actionCreators = {
  setActiveMarker
};

export default connect(mapStateToProps, actionCreators)(MarkerList);
