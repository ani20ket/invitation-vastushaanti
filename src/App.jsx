import { useEffect, useState } from "react";
import couple from "./assets/couple.jpg";

// 3 February 2027, 12:00 AM IST (UTC+05:30), the same moment for every viewer
const TARGET = new Date("2027-02-02T00:00:00+05:30").getTime();

function remaining() {
  const diff = Math.max(0, TARGET - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    done: diff === 0,
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

function Unit({ value, label }) {
  return (
    <div className="arch">
      <span className="num">{String(value).padStart(2, "0")}</span>
      <span className="lab">{label}</span>
    </div>
  );
}

export default function App() {
  const [t, setT] = useState(remaining());

  useEffect(() => {
    const id = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <div className="photo">
        <img src={couple} alt="Aniket and Meetali holding hands, surrounded by sparklers and mist" />
      </div>
      <p className="lead">Together with their families</p>
      <h1>
        Aniket<span className="amp">&amp;</span>Meetali
      </h1>
      <p className="date">are getting married on 3 February 2027</p>
      {t.done ? (
        <div className="done">Today is the day!</div>
      ) : (
        <div className="row" role="timer" aria-label="Time until the wedding">
          <Unit value={t.days} label="days" />
          <Unit value={t.hours} label="hours" />
          <Unit value={t.minutes} label="minutes" />
          <Unit value={t.seconds} label="seconds" />
        </div>
      )}
      <p className="foot">We can't wait to celebrate with you.</p>
    </main>
  );
}
