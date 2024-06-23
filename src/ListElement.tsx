import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

interface Props {
  name: string;
  details: string;
  onClick: () => void;
}

const currentDate = new Date();

// Format the date to a string with options for date and time
const formattedDate = currentDate.toLocaleString("en-GB", {
  day: "2-digit", // Two-digit day of the month (e.g., 30)
  month: "2-digit", // Two-digit month (e.g., 04)
  year: "numeric", // Numeric year (e.g., 2024)
  hour: "numeric", // Numeric hour (e.g., 17)
  minute: "numeric", // Numeric minute (e.g., 35)
});

function ListElement({ name, details, onClick }: Props) {
  return (
    <div className="list-element" onClick={onClick}>
      <span className="name-icon">
        <p>{name}</p>
        <FontAwesomeIcon icon={faEllipsis} size="xl" className="more" />
      </span>
      <p>{details}</p>
      <p>Created: {formattedDate}</p>
    </div>
  );
}

export default ListElement;
