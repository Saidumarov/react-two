import styled from "styled-components";

const StyledComponent = styled.button`
  border: none;
  border-radius: 8px;
  bottom: 0;
  color: #fff;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;
  height: 45px;
  width: 130px;
  z-index: 2;
  background-color: #1a8754;
`;

export default StyledComponent;

export const SaveButton = styled.button`
  border: none;
  border-radius: 8px;
  bottom: 0;
  color: #fff;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;
  height: 45px;
  width: 130px;
  z-index: 2;
  background-color: rgb(111, 44, 245);
  margin-top: 20px;
  margin-left: 40px;
`;

export const DeleteButton = styled.button`
  background-color: #e84848;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  margin-left: 20px;
  outline: none;
  width: 60px;
  height: 40px;
  transition: 0.3s;
  svg {
    fill: white;
  }
  &:hover {
    background-color: rgb(186, 45, 59);
  }
`;

export const EditButton = styled.button`
  background-color: rgb(13, 109, 252);
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  outline: none;
  width: 60px;
  height: 40px;
  transition: 0.3s;
  svg {
    fill: white;
  }
  &:hover {
    background-color: rgb(11, 92, 214);
  }
`;

export const Pagenarion = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 150px;

  ul {
    display: flex;
  }
  li a {
    border-radius: 7px;
    padding: 0.5rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
  li {
    list-style: none;
    margin-left: 10px;
  }
`;
