import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const UploadPhoto = (props) => {
  const handleFileSelect = () => {
    document.getElementById("file").click();
  };
  return (
    <div>
      <Form>
        <FormGroup>
          <strong>
            <Label htmlFor="file">Select Photos to Upload:</Label>
            <br />
          </strong>
          <Input
            type="file"
            name="file"
            id="file"
            className="mb-3"
            color="primary"
            style={{ display: "none" }}
            multiple
          />
          <Button color="success" onClick={handleFileSelect} className="mr-3">
            Select Photos
          </Button>
          <Button color="primary" className="mr-3">
            Upload Photos
          </Button>
          <Button color="danger" onClick={() => props.close(null)}>
            Cancel
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default UploadPhoto;
