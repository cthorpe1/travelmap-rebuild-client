import React from "react";
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  UncontrolledTooltip
} from "reactstrap";
import styles from "./Subcontainer.module.css";

const Subcontainer = props => {
  const deleteSubcontainer = () => {};
  return (
    <div className={styles.Subcontainer}>
      <Card className={styles.SubcontainerCard}>
        <CardHeader>
          {props.content.name}
          <span className={styles.Close}>
            <i
              className="fa fa-trash"
              onClick={deleteSubcontainer}
              id="trashcan"
            ></i>
            <UncontrolledTooltip placement="right" target="trashcan">
              This will delete your subcontainer and all nested items
            </UncontrolledTooltip>
          </span>
        </CardHeader>
        <CardBody>
          <CardText>Container description will go here</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Subcontainer;
