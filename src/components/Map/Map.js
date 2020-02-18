import React, {useState} from "react";
import { Map, TileLayer } from "react-leaflet";
import Toolbar from "../Toolbar/Toolbar";
import styles from "./Map.module.css";
const MapContainer = () => {
  const MAPBOX_URL = `https://api.mapbox.com/styles/v1/cthorpe4/ck18dwcl84w1l1dqturfu8dfw/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3Rob3JwZTQiLCJhIjoiY2p6ZzVrNmVnMGlrOTNjcWZ6NnZpaWtuaSJ9.1MxO6Z_Ae3VqLM8huxFegQ`;
  const [position, setPosition] = useState({
      coords: [34.043410, -40.776147],
      zoom: 2
  })
  return (
    <div className={styles.MapContainer}>
      <Toolbar/>
      <Map
        center={position.coords}
        zoom={position.zoom}
        minZoom={3}
        zoomSnap={1}
        wheelPxPerZoomLevel={80}
        zoomDelta={0.5}
        className={styles.Map}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors: Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'
          url={MAPBOX_URL}
        />
      </Map>
    </div>
  );
};

export default MapContainer;
