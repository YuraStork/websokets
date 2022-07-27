import styled from "styled-components";

const EnterInRoomWrapper = styled.div`
  min-width: 300px;
  max-width: 500px;
  background-color: #22ee77be;
  padding: 10px;

  & > form > div > input {
    width: 100%;
    height: 30px;
    margin-top: 10px;
  }
  & > form > button{
    width: 200px;
    height: 30px;
    margin-top: 10px;
    background-color: white;
    cursor: pointer;
    outline: none;
    border: none;
    color: black;
  }
`;
export { EnterInRoomWrapper };
