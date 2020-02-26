import React, { useEffect, useState } from "react";
import { Container, Time, DateContainer } from "./styles";
import { DAYS, MONTHS } from "../../constants"

export default function Clock() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const timeString = `${(hours < 10 ? "0" : "") + hours}:${(minutes < 10 ? "0" : "") + minutes}`;
  const clockContent = `${DAYS[time.getDay()]}, ${time.getDate()} ${MONTHS[time.getMonth()]} `;

  return (
    <Container>
      <Time>{timeString}</Time>
      <DateContainer>{clockContent}</DateContainer>
    </Container>
  );
}