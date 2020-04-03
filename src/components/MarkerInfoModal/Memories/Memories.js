import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import Subcontainer from "./Subcontainer/Subcontainer";
import {
  getSubcontainers,
  deleteSubcontainer
} from "../../../actions/subcontainerActions";
const Memories = props => {
  useEffect(() => {
    props.getSubcontainers(props.content.id);
  }, []);

  return (
    <div>
      <Row xs="3">
        {props.subContainers.subContainers !== null &&
          props.subContainers.subContainers.map(container => {
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
    markers: state.markers,
    subContainers: state.subContainers
  };
};

const actionCreators = {
  getSubcontainers,
  deleteSubcontainer
};

export default connect(mapStateToProps, actionCreators)(Memories);
