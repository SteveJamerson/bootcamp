import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonComponent = styled.button<ButtonProps>`
    display: flex;
    place-content: center;
    align-items: center;
    gap: 1rem;
    font-weight: 600;
    padding: .25rem 1.5rem;
    border: 0;
    border-radius: 3rem;
    color: inherit;
    background-color: transparent;

    ${props => props.color === "primary" &&
        css`background-color: var(--gray-900); color: var(--white);`}
    ${props => props.color === "secondary" &&
        css`background-color: var(--white); color: var(--black);`}
    ${props => props.variant === "text" &&
        css`padding: 0; display: inline-flex`}
    ${props => props.variant === "link" &&
        css`text-decoration: underline;`}

    &:disabled {
        opacity: .5;
        cursor: not-allowed
    }


`

