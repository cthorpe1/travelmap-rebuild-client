import React from "react";
import { connect } from "react-redux";
import { Marker } from "react-leaflet";
import { setActiveMarker } from "../../actions/markerActions";
import MarkerInfoModal from "../MarkerInfoModal/MarkerInfoModal.js";

const MarkerList = props => {
  const setActiveMarker = marker => {
    props.setActiveMarker(marker);
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
