import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  onClick: () => void
}

function AddBtn({ onClick } : Props) {
  return (
    <button type="button" className="btnAdd" onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export default AddBtn;
