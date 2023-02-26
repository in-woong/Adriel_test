import styled from 'styled-components';

export const TimeHand = styled.div`
  width: 50%;
  height: 6px;
  background: red;
  position: absolute;
  top: 50%;
  transform: rotate(90deg);
  /* transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1); */
  transform-origin: 100%;
  -webkit-transition: all 0.05s;
  -moz-transition: all 0.05s;
  -ms-transition: all 0.05s;
  -o-transition: all 0.05s;
  transition: all 0.05s;
  transition-timing-function: ease-in-out;
`;
