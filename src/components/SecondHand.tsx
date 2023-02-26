import React from 'react';
import { getSeconds } from 'store/time/timeSlice';
import styled from 'styled-components';
import { useAppSelector } from 'utils/hooks';
import { secondsToDegrees } from 'utils/utils';
import { TimeHand } from './TimeHand';

const Hand = styled(TimeHand)``;

export default function SecondHand() {
  const seconds = useAppSelector(getSeconds);
  const secondStyle = {
    transform: `rotate(${secondsToDegrees(seconds)}deg)`,
  };

  return <Hand style={secondStyle} />;
}
