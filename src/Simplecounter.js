import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Counter() {
  let [seconds, setSeconds] = useState(0);
  let [tens, setTens] = useState(0);
  let [hund, setHund] = useState(0);
  let [thous, setThous] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds >= 9) {
        setSeconds(0);
        setTens(tens + 1);
        if (tens >= 9) {
          setTens(0);
          setHund(hund + 1);
          if (hund >= 9) {
            setHund(0);
            setThous(thous + 1);
          }
        }
      }
    }, 1000);

    //clearing interval
    return () => clearInterval(timer);
  });

  return (
    <>
      <div className="container">
        <div className="innerContainer">
          <ul className="ulList">
            <li>{seconds}</li>
            <li>{tens}</li>
            <li>{hund}</li>
            <li>{thous}</li>
            <li>0</li>
            <li>0</li>
            <FontAwesomeIcon className="reloj" icon={faClock} />
          </ul>
        </div>
      </div>
    </>
  );
}
