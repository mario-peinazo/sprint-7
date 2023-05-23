import styled from 'styled-components';

export const Fondo = styled.div `
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    left:0;
    z-index:1;
    background-color: rgb(7 7 7 / 87%);
    display: ${({ popUp }) => (popUp ? "flex" : "none")};
`

export const Modal = styled.div`
width: 500px;
height: 200px;
padding: 50px;
margin: 10px 0px;
border: 5px solid black;
border-radius: 10px;
background-color: white;
justify-content: center;
align-items: center;
display: flex;
`;