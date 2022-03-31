const getTime = () => {
  return (
    new Date().getHours().toLocaleString("en-US", { minimumIntegerDigits: 2 }) +
    ":" +
    new Date().getMinutes().toLocaleString("en-US", { minimumIntegerDigits: 2 })
  );
};

export const Clock = () => {
  return <div className="time-wrapper">{getTime()}</div>;
};
