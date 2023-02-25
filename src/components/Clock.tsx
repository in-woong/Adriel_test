import React, { useRef } from 'react';
import { useAppSelector } from 'hooks';
import { getHours, getMinutes, getSeconds } from 'store/time/timeSlice';
import styled from 'styled-components';
import { hoursToDegrees, minutesToDegrees, secondsToDegrees } from 'utils';

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
const HourHand = styled.div`
  width: 50%;
  height: 6px;
  background: green;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
`;
const MinHand = styled.div`
  width: 50%;
  height: 6px;
  background: blue;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
`;
const SecondHand = styled.div`
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

  return (
    <Wrapper>
      <ClockFace>
        <HourHand style={hourStyle} ref={hoursHand}></HourHand>
        <MinHand style={minuteStyle} ref={minutesHand}></MinHand>
        <SecondHand style={secondStyle} ref={secondsHand}></SecondHand>
      </ClockFace>
    </Wrapper>
  );
}
