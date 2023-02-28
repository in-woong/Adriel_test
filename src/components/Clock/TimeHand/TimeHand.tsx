import styled from 'styled-components';

export const TimeHand = styled.div`
  position: absolute;
  top: 50%;
  width: 50%;
  height: 6px;
  background: red;

  transform: rotate(90deg);
  transform-origin: 100%;
  -webkit-transition: all 0.05s;
  -moz-transition: all 0.05s;
  -ms-transition: all 0.05s;
  -o-transition: all 0.05s;
  transition: all 0.05s;
  transition-timing-function: ease-in-out;
`;
