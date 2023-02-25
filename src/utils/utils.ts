export const hoursToDegrees = (hours: number) => {
  return (hours / 24) * 360 + 90;
};

export const minutesToDegrees = (minutes: number) => {
  return (minutes / 60) * 360 + 90;
};

export const secondsToDegrees = (seconds: number) => {
  return (seconds / 60) * 360 + 90;
};
