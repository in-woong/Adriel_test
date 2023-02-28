import React from 'react';
import { getTimes } from 'store/time/timeSlice';
import styled from 'styled-components';
import { useAppSelector } from 'utils/hooks';
import { IPosition } from './Clock';

interface TooltipProps {
  position: IPosition;
}

const TooltipText = styled.span<{
  left: string;
  top: string;
}>`
  &::after {
    content: '';
    position: absolute;
    color: green;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
  width: 110px;
  height: 20px;
  left: 50%;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5;
  z-index: 55;
  position: absolute;
  bottom: 77%;
  margin-left: -60px;
`;

function Tooltip({ position }: TooltipProps) {
  const { x, y } = position;
  const timeString = useAppSelector(getTimes);

  return (
    <TooltipText left={`${x}px`} top={`${y}px`}>
      {timeString}
    </TooltipText>
  );
}

export default React.memo(Tooltip);
