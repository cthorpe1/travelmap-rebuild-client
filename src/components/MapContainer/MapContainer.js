import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Map, TileLayer } from "react-leaflet";
import { getTopLevelMarkers } from "../../actions/markerActions";
import Toolbar from "../Toolbar/Toolbar";
import MarkerList from "../MarkerList/MarkerList";

import styles from "./MapContainer.module.css";
const MapContainer = props => {
  const MAPBOX_URL = `https://api.mapbox.com/styles/v1/cthorpe4/ck18dwcl84w1l1dqturfu8dfw/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3Rob3JwZTQiLCJhIjoiY2p6ZzVrNmVnMGlrOTNjcWZ6NnZpaWtuaSJ9.1MxO6Z_Ae3VqLM8huxFegQ`;
  const [position, setPosition] = useState({
    coords: [38.954354, 22.099391],
    zoom: 2
  });

  const populate = async () => {
    await props.getTopLevelMarkers();
  };

  //Run effect to grab markers on component mount
  useEffect(() => {
    populate();
    console.log("Populating Map");
  }, []);

  return (
    <div className={styles.MapContainer}>
      <Toolbar />
      <Map
        center={position.coords}
        zoom={position.zoom}
        minZoom={2}
        zoomSnap={.5}
        wheelPxPerZoomLevel={80}
        zoomDelta={0.5}
        className={styles.Map}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors: Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'
          url={MAPBOX_URL}
        />
        <MarkerList />
      </Map>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    markers: state.markers
  };
};

const actionCreators = {
  getTopLevelMarkers
};

export default connect(mapStateToProps, actionCreators)(MapContainer);
