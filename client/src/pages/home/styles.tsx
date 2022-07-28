import styled from "styled-components";

const HomePageSection = styled.section``;

const HomePageWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
  &>div{
    box-shadow: 0px 0px 2px 1px black;
  }
`;
export { HomePageSection, HomePageWrapper };
