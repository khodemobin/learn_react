export default function PeopleList({ people }) {
  return (
    <>
      {people.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p>{item.age}</p>
          <p>{item.hairColor}</p>
        </div>
      ))}
    </>
  );
}
