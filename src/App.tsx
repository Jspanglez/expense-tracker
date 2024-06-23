import { useState } from "react";
import ExpenseDetails from "./ExpenseDetails";
import Sidebar from "./Sidebar";

function App() {
  const [elements, setElements] = useState<{ name: string; details: string }[]>(
    []
  );

  // Function to add a new element to the list
  const addElement = () => {
    const newElement = { name: "Name", details: "Description" };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const myFunction = () => {
    console.log("Click!");
  };

  return (
    <div className="main">
      <Sidebar
        elements={elements}
        addElement={addElement}
        myFunction={myFunction}
      />
      <ExpenseDetails elements={elements}/>
    </div>
  );
}

export default App;
