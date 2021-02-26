import PeopleListItem from "./PeopleListItem";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 2px solid white;
  padding: 32px;
`;

export default function PeopleList({ people }) {
  return (
    <Wrapper>
      {people.map((item) => (
        <PeopleListItem item={item} key={item.name} />
      ))}
    </Wrapper>
  );
}
