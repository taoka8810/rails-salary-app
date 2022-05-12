import React, { useState } from "react";
import { Button } from "./Button";

export const Form: React.VFC = () => {
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [date, setDate] = useState("");
  const onClick = () => {
    console.log("始業時刻：" + typeof startTime);
    console.log("終業時刻：" + typeof finishTime);
    console.log("日付：" + typeof date);
  };
  return (
    <div className="p-form">
      <div className="p-form__item">
        始業時刻
        <input
          type="time"
          className="p-form-item__start"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div className="p-form__item">
        終業時刻
        <input
          type="time"
          className="p-form-item__finish"
          value={finishTime}
          onChange={(e) => setFinishTime(e.target.value)}
        />
      </div>
      <div className="p-form__item">
        日付
        <input
          type="date"
          className="p-form-item__date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="p-form__button">
        <Button text="登録する" onClick={onClick} />
      </div>
    </div>
  );
};
