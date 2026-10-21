import React from "react";
import styled from "styled-components";
export default function Button({ text }) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.button`
  padding: 1rem 2rem;
  background-color: white;
  border : 2px solid green;
  border-radius:12px;
  font-size: 1.1rem;
  color: green;
  cursor: pointer;
`;
