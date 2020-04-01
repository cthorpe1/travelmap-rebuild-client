import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import Subcontainer from "./Subcontainer/Subcontainer";
import {
  getSubcontainers,
  deleteSubcontainer
} from "../../../actions/markerActions";
const Memories = props => {
  useEffect(() => {
    props.getSubcontainers(props.content.id);
  }, []);

  return (
    <div>
      <Row xs="3">
        {props.markers.subContainers !== null &&
          props.markers.subContainers.map(container => {
            return (
              <Subcontainer
                key={container._id}
                content={container}
                parent={props.markers.currentParent.id}
                deleteSub={props.deleteSubcontainer}
              />
            );
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
  getSubcontainers,
  deleteSubcontainer
};

export default connect(mapStateToProps, actionCreators)(Memories);
