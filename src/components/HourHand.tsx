import React from 'react';
import { getHours } from 'store/time/timeSlice';
import styled from 'styled-components';
import { useAppSelector } from 'utils/hooks';
import { hoursToDegrees } from 'utils/utils';
import { TimeHand } from './TimeHand';

const Hand = styled(TimeHand)``;

export default function HourHand() {
  const hours = useAppSelector(getHours);
  const hourStyle = {
    transform: `rotate(${hoursToDegrees(hours)}deg)`,
  };

  return <Hand style={hourStyle} />;
}
