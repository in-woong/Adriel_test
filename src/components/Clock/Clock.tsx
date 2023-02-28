import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import ClockFace from './ClockFace';
import Tooltip from './Tooltip';

export interface IPosition {
  x: number;
  y: number;
}

const ClockWrapper = styled.div`
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

export default function Clock() {
  const [isTooltip, setIsTooltip] = useState<boolean>(false);
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: e.pageX - window.innerWidth / 2 + 180,
      y: e.pageY - window.innerHeight / 2 + 140,
    });
  };

  const handleMouseEnter = () => {
    setIsTooltip(true);
  };
  const handleMouseLeave = () => {
    setIsTooltip(false);
  };

  return (
    <ClockWrapper
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ClockFace />
      {isTooltip && <Tooltip position={position} />}
    </ClockWrapper>
  );
}
