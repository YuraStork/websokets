import styled from "styled-components";

const HomePageSection = styled.section``;

const HomePageWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: 800px;
  gap: 10px;
  margin: 0 auto;

  & > div {
    box-shadow: 0px 0px 2px 1px black;
  }
`;
export { HomePageSection, HomePageWrapper };
