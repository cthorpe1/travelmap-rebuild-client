import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import Subcontainer from "./Subcontainer/Subcontainer";
import { getSubcontainers } from "../../../actions/markerActions";
const Memories = props => {
  useEffect(() => {
    props.getSubcontainers(props.content.id);
  }, []);

  return (
    <div>
      <Row xs="3">
          {props.markers.subContainers !== null &&
            props.markers.subContainers.map(container => {
              return <Subcontainer content={container} />;
            })}
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    markers: state.markers
  };
};

const actionCreators = {
  getSubcontainers
};

export default connect(mapStateToProps, actionCreators)(Memories);
