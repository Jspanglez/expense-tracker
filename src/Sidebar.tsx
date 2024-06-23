import "./App.css";
import AddBtn from "./AddBtn";
import ListElement from "./ListElement";

interface Props {
  elements: { name: string; details: string }[];
  addElement: () => void;
  myFunction: () => void;
}

const Sidebar = ({ elements, addElement, myFunction }: Props) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <p className="sidebar-heading">My Expenses</p>
        <AddBtn onClick={addElement} />
      </div>
      <div className="list-container">
        {elements.map((element, index) => (
          <ListElement
            key={index}
            name={element.name}
            details={element.details}
            onClick={myFunction}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
