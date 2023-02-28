export const hoursToDegrees = (hours: number) => {
  if (hours >= 12) {
    return (hours / 24) * 360 + 90;
  }
  return (hours / 12) * 360 + 90;
};

export const minutesToDegrees = (minutes: number) => {
  return (minutes / 60) * 360 + 90;
};

export const secondsToDegrees = (seconds: number) => {
  return (seconds / 60) * 360 + 90;
};

export const getStringTime = (time: number) => {
  if (time < 10) return `0${time}`;
  return `${time}`;
};

export const getTime = (hours: number, minutes: number, seconds: number) => {
  const HH = getStringTime(hours);
  const MM = getStringTime(minutes);
  const SS = getStringTime(seconds);

  return `${HH}:${MM}:${SS}`;
};
