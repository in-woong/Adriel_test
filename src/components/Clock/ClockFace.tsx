import React, { useEffect } from 'react';
import { useAppDispatch } from 'utils/hooks';
import { setTime } from 'store/time/timeSlice';
import styled from 'styled-components';
import SecondHand from './TimeHand/SecondHand';
import MinuteHand from './TimeHand/MinuteHand';
import HourHand from './TimeHand/HourHand';

const Face = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px);
`;

function ClockFace() {
  const dispatch = useAppDispatch();

  const setNowTime = () => {
    const now = new Date();
    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes();
    const nowSeconds = now.getSeconds();

    dispatch(
      setTime({ hours: nowHours, minutes: nowMinutes, seconds: nowSeconds }),
    );
  };

  useEffect(() => {
    setInterval(setNowTime, 1000);
  }, []);
  return (
    <Face>
      <HourHand />
      <MinuteHand />
      <SecondHand />
    </Face>
  );
}

export default React.memo(ClockFace);
