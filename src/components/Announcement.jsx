import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free shipping on orders above $50</Container>;
};

export default Announcement;
