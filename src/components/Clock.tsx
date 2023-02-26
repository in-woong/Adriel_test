import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip';
import SecondHand from './SecondHand';
import MinuteHand from './MinuteHand';
import HourHand from './HourHand';

export interface IPosition {
  x: number;
  y: number;
}

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

export default function Clock() {
  const [isTooltip, setIsTooltip] = useState(false);
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
        <HourHand />
        <MinuteHand />
        <SecondHand />
        {isTooltip && <Tooltip position={position} />}
      </ClockFace>
    </Wrapper>
  );
}
