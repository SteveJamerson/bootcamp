import styled from "styled-components";
import { TextFieldProps } from "./TextField";

export const TextFieldComponent = styled.div<TextFieldProps>`
    input {
        display: block;
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        border: 0px solid var(--gray-900);
        border-bottom-width: 1px;
        border-radius: 0;
        transition: 0.3s;

        &:focus {
        outline: none;
        }
    }
`