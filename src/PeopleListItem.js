import "./PeopleListItem.css";

export default function PeopleListItem({ item }) {
  return (
    <>
      <div className="list-item-div">
        <h3>{item.name}</h3>
        <p>{item.age}</p>
        <p>{item.hairColor}</p>
      </div>
    </>
  );
}
