import styled from 'styled-components';

export const TimeHand = styled.div`
  width: 50%;
  height: 6px;
  background: red;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
`;
