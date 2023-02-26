import React, { useRef } from 'react';
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
        <HourHand style={hourStyle} ref={hoursHand} />
        <MinHand style={minuteStyle} ref={minutesHand} />
        <SecondHand style={secondStyle} ref={secondsHand} />
      </ClockFace>
    </Wrapper>
  );
}
