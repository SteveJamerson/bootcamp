import styled from "styled-components";
import { TextFieldProps } from "./TextField";

export const TextFieldComponent = styled.div<TextFieldProps>`
    position: relative;
    margin: 1rem;

    input {
        display: block;
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        border: 0px solid var(--gray-900);
        border-bottom-width: 1px;
        border-radius: 0;
        transition: 0.3s;
        text-indent: 1rem;

        &:focus {
        outline: none;
        }
    }

    label {
        position: absolute;
        top: 0;
        left: 0;
        transition: .3s;

        &.placehold {
            pointer-events: none;
        }

        &.caption {
            --size: var(--font-size-smaller);
            line-height: normal;
            font-size: var(--size);
            top: -1rem;
        }
    }

    small {
        position: absolute;
        --size: var(--font-size-smaller);
        font-size: var(--size);
        line-height: normal;
        right: 0;
        
        &.error {
            color: var(--color-error)   
        }
    }
`