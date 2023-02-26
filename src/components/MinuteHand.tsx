import React from 'react';
import { getMinutes } from 'store/time/timeSlice';
import styled from 'styled-components';
import { useAppSelector } from 'utils/hooks';
import { minutesToDegrees } from 'utils/utils';
import { TimeHand } from './TimeHand';

const Hand = styled(TimeHand)``;

export default function MinuteHand() {
  const minutes = useAppSelector(getMinutes);
  const minuteStyle = {
    transform: `rotate(${minutesToDegrees(minutes)}deg)`,
  };

  return <Hand style={minuteStyle} />;
}
