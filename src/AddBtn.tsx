import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddBtn() {
  return (
    <button type="button" className="btnAdd">
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export default AddBtn;
