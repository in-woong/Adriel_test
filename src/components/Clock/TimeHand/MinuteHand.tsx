import React from 'react';
import { getMinutes } from 'store/time/timeSlice';
import styled from 'styled-components';
import { useAppSelector } from 'utils/hooks';
import { minutesToDegrees } from 'utils/utils';
import { TimeHand } from './TimeHand';

interface MinuteHandProps {
  minutes: number;
}

const Hand = styled(TimeHand)`
  background-color: black;
  width: 40%;
  right: 50%;
`;

function MinuteHand() {
  const minutes = useAppSelector(getMinutes);

  const minuteStyle = {
    transform: `rotate(${minutesToDegrees(minutes)}deg)`,
  };

  return <Hand style={minuteStyle} />;
}

export default React.memo(MinuteHand);
