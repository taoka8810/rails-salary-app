import React, { useState } from "react";
import { Button } from "./Button";
import axios from "axios";

export const Form: React.VFC = () => {
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [date, setDate] = useState("");

  const onClick = async () => {
    const worktime = timeTranslate(startTime, finishTime);
    const dateNum = dateTranslate(date);
    await axios
      .post("http://localhost:4000/worktimes", {
        worktime: worktime,
        date: dateNum,
      })
      .then(() => {
        setStartTime("");
        setFinishTime("");
        setDate("");
        console.log("処理が完了しました");
      });
  };

  // 始業時刻と終業時刻から業務時間を算出する
  const timeTranslate = (start: string, finish: string) => {
    const startNum =
      Number(start.substring(0, 2)) * 60 +
      Number(start.substring(start.length - 2));
    const finishNum =
      Number(finish.substring(0, 2)) * 60 +
      Number(finish.substring(finish.length - 2));
    return (finishNum - startNum) / 60;
  };

  // 日付のデータ型をnumberに変換
  const dateTranslate = (value: string) => {
    return Number(value.replace(/-/g, ""));
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
