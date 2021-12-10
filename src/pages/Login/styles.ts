import styled from "styled-components";

export const SectionLogin = styled.section `
    min-height: 100vh;
    width: 100vw;
`;

export const Slide = styled.div `
    display: flex;
    place-content: center;
    align-items: center;
    background-color: var(--green);
    padding: 3rem;
    color: var(--white);
`;

export const Form = styled.div `
    display: flex;
    flex-direction: column;
    padding: 3rem;
    place-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 992px) {
        order: -1
    }

    h2.title {
        --size: var(--font-size-h1);
        align-self: flex-end;
        font-weight: bolder;
        font-family: 'Lato', sans-serif;
        color: var(--black);
    }

    h5.subtitle {
        --size: var(--font-size-h2);
        margin: 2rem auto;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        max-width: 450px;
        
        div {
            width: 100%;
        }

        a {
            align-self: flex-end;
        }

        button {
            min-width: 175px;
        }
    }
`;

export const Separator = styled.hr`
    overflow: visible;
    width: 100%;
    max-width: 250px;
    padding: 0;
    border: none;
    border-top: 1px solid var(--gray-100);
    color: var(--gray-900);
    text-align: center;
    opacity: 1;

    &:after {
        content: "Or";
        display: inline-block;
        width: 2rem;
        position: relative;
        top: -1.1rem;
        font-size: var(--font-size-small);
        padding: 0 0.25rem;
        background: white;
    }
`