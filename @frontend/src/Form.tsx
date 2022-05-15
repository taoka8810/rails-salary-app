import React, { useState } from "react";
import { createWork } from "./api/Work";
import { FlashMessage } from "./FlashMessage";

type FlashMessageType = "positive" | "error";

export const Form: React.VFC = () => {
  // backendに渡すデータ
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [date, setDate] = useState("");

  // FlashMessage関係のState
  const [FMText, setFMText] = useState("");
  const [FMType, setFMType] = useState<FlashMessageType>("positive");
  const [isVisible, setIsVisible] = useState(false);

  // 登録ボタンのonClickメソッド
  const onClick = () => {
    const worktime = timeTranslate(startTime, finishTime);
    const salary = worktime * 1200;
    const dateNum = dateTranslate(date);
    if (startTime === "" || finishTime === "" || date === "") {
      setFMText("全ての項目を入力してください");
      setFMType("error");
      setIsVisible(true);
    } else if (worktime < 0) {
      setFMText("終業時刻は始業時刻よりも前の時間に設定してください");
      setFMType("error");
      setIsVisible(true);
    } else {
      createWork(worktime, salary, dateNum).then(() => {
        setStartTime("");
        setFinishTime("");
        setDate("");
        window.location.reload();
      });
    }
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
        <button onClick={onClick}>登録する</button>
      </div>
      <FlashMessage text={FMText} type={FMType} isVisible={isVisible} />
    </div>
  );
};
