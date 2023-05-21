import styled from "styled-components";

const Panel = styled.div`
width: 350px;
height: 150px;
padding: 10px;
margin: 10px 0px;
border: 5px solid black;
border-radius: 10px;
justify-content: center;
align-items: center;
display: inline-flex;
flex-direction: column;
display: ${({ mostrar }) => (mostrar ? "inline-flex" : "none")};
`;

export default Panel;