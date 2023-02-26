import React from 'react';
import { getHours, getMinutes, getSeconds } from 'store/time/timeSlice';
import styled from 'styled-components';
import { useAppSelector } from 'utils/hooks';
import { IPosition } from './Clock';

const TooltipText = styled.span`
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
  /* visibility: hidden; */
  width: 110px;
  height: 20px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5;
  z-index: 55;
  position: absolute;
  left: 50%;
  bottom: 77%;
  margin-left: -60px;
`;
interface TooltipProps {
  position: IPosition;
}
export default function Tooltip({ position }: TooltipProps) {
  const hours = useAppSelector(getHours);
  const minutes = useAppSelector(getMinutes);
  const seconds = useAppSelector(getSeconds);

  const { x, y } = position;

  return (
    <TooltipText
      style={{ left: `${x}px`, top: `${y}px` }}
    >{`${hours}:${minutes}:${seconds}`}</TooltipText>
  );
}
