import styled from "@emotion/styled";

export const Cart = styled.div `
    position: relative;

`

export const CartCount = styled.div `
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #FF6900;
    color: #f4f4f2;
    font-size: 0.75rem;
    text-align: center;
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
`

export const CartDropDown = styled.div `
    position: absolute;
    background-color: #f4f4f2;
    top: 100%;
    right: 0;
    width: 19.5rem;
    padding: 0.75rem;
    box-sizing: border-box;
    display: ${(props) => props.visible ? "block" : "none"};
`   

