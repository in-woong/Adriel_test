import React, { useRef, useState } from 'react';
import { useAppSelector } from 'utils/hooks';
import { getHours, getMinutes, getSeconds } from 'store/time/timeSlice';
import styled from 'styled-components';
import {
  hoursToDegrees,
  minutesToDegrees,
  secondsToDegrees,
} from 'utils/utils';
import { TimeHand } from './TimeHand';

const Wrapper = styled.div`
  width: 30rem;
  height: 30rem;
  border: 20px solid white;
  border-radius: 50%;
  margin: 50px auto;
  position: relative;
  padding: 2rem;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #efefef,
    inset 0 0 10px black, 0 0 10px rgba(0, 0, 0, 0.2);
`;
const ClockFace = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px);
`;
const HourHand = styled(TimeHand)``;
const MinHand = styled(TimeHand)``;
const SecondHand = styled(TimeHand)``;

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

export default function Clock() {
  const hours = useAppSelector(getHours);
  const minutes = useAppSelector(getMinutes);
  const seconds = useAppSelector(getSeconds);

  const hoursHand = useRef<HTMLDivElement>(null);
  const minutesHand = useRef<HTMLDivElement>(null);
  const secondsHand = useRef<HTMLDivElement>(null);

  const hourStyle = {
    transform: `rotate(${hoursToDegrees(hours)}deg)`,
  };

  const minuteStyle = {
    transform: `rotate(${minutesToDegrees(minutes)}deg)`,
  };

  const secondStyle = {
    transform: `rotate(${secondsToDegrees(seconds)}deg)`,
  };
  const [isTooltip, setIsTooltip] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: any) => {
    if (!isTooltip) setIsTooltip(true);
    setPosition({
      x: e.pageX - window.innerWidth / 2 + 170,
      y: e.pageY - window.innerHeight / 2 + 120,
    });
  };

  const handleMousOut = () => {
    setIsTooltip(false);
  };

  return (
    <Wrapper onMouseMove={handleMouseMove}>
      <ClockFace onMouseOut={handleMousOut}>
        <HourHand style={hourStyle} ref={hoursHand} />
        <MinHand style={minuteStyle} ref={minutesHand} />
        <SecondHand style={secondStyle} ref={secondsHand} />

        {isTooltip && (
          <TooltipText
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          >{`ID: ${position.x}`}</TooltipText>
        )}
      </ClockFace>
    </Wrapper>
  );
}
