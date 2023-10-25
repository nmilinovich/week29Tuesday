import React, { useEffect, useState } from 'react';

export const ClockToggle = ({ toggleClock }) => {

    return (
      <button
        type="button"
        className="clock-toggle"
        onClick={toggleClock}
      >
        Toggle Clock
      </button>
    )
}

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    const componentWillUnmount = () => {
      console.log("Clearing Clock interval!")
      clearInterval(interval);
    }
    return componentWillUnmount(interval);
  }, [])

  const tick = () => {
    setDate(new Date());
  }
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  const timezone = date
    .toTimeString() // Form: "14:39:07 GMT-0600 (PDT)"
    .replace(/[^A-Z]/g, "") // Strip out all but capitals
    .slice(3); // Eliminate initial GMT

  return (
    <section className="clock-section">
      <h1>Clock</h1>
      <div className='clock'>
        <p className="time">
          <span>
            Time:
          </span>
          <span>
            {`${hours}:${minutes}:${seconds} ${timezone}`}
          </span>
        </p>
        <p className="date">
          <span>
            Date:
          </span>
          <span>
            {date.toDateString()}
          </span>
        </p>
      </div>
    </section>
  );

}

export default Clock;
