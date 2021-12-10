import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonComponent = styled.button<ButtonProps>`
    display: flex;
    place-content: center;
    align-items: center;
    width: fit-content;
    gap: 1rem;
    font-weight: 600;
    padding: .5rem 1.5rem;
    border: 0;
    border-radius: 3rem;
    color: inherit;
    background-color: transparent;

    ${props => props.color === "primary" &&
        css`background-color: var(--gray-900); color: var(--white);`}
    ${props => props.color === "secondary" &&
        css`background-color: var(--white); color: var(--black);`}
    ${props => props.variant === "link" &&
        css`
            text-decoration: underline;
            display: inline-flex;
            padding: 0;
            background-color: transparent;
            color: var(--green);
            min-width: auto!important;
            margin: 0 0.25rem;
        `}

    &:disabled {
        opacity: .5;
        cursor: not-allowed
    }


`

