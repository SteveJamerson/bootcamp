import styled from "styled-components";

export const SliderWrapperComponent = styled.div`
    position: relative;
    text-align: center;
    /* * {
        user-select: none;
    } */

`
export const SliderItemsComponent = styled.div`
    flex: none;
    width: 100%;
    height: auto;
    pointer-events: none;
    margin: 0!important;
    padding: 0!important;
    position: relative;
    scroll-snap-align: center;
    transition: 1s;
`
export const SliderItemComponent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    cursor: move;

    img {
      max-width: 100%;
      width: 100%;
      height: auto;
    }

    &:hover {
      cursor: move;
    }

    &:active {
      cursor: grabbing;
      scroll-snap-type: x none;
    }

    &::-webkit-scrollbar {
      visibility: hidden;
    }

    &::after {
      content: "";
      display: table;
      position: relative;
      width: 0px;
      height: 0px;
    }
`
export const SliderNavComponent = styled.div`
    display: flex;
    justify-content: center;
    grid-gap: 1rem;
    height: 1rem;

    .dot {
      mix-blend-mode: color-dodge;
      height: 0;
      cursor: pointer;
      opacity: .6;

      &::after {
        content: '';
        display: block;
        background-color: white;
        width: .75rem;
        height: .75rem;
        border-radius: .75rem;
        transition: .5s;
        transition-delay: .1s;
      }

      &:hover {
        opacity: .8;
      }

      &:checked {
        opacity: 1;

        &::after {
          position: relative;
          width: 1.5rem;
          left: -0.375rem;
          transition: .5s;
        }
      }
    }
`

