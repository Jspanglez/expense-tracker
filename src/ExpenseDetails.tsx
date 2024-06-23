interface Props {
  elements: { name: string; details: string }[];
}

function ExpenseDetails({ elements }: Props) {
  const nameToShow = elements.length > 0 ? elements[0].name : "You don't have any expenses!";

  return <div className="expense-details">{nameToShow}</div>;
}

export default ExpenseDetails;
