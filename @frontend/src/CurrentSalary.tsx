import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getSalary } from "./api/Work";

export const CurrentSalary: React.VFC = () => {
  const [value, setValue] = useState(0);
  const fetch = async () => {
    const val = await getSalary();
    setValue(val.data);
  };
  useEffect(() => {
    fetch();
  });
  return (
    <Style>
      <div className="p-current-salary">
        <h1 className="p-current-salary__title">現在の給与</h1>
        <div className="p-current-salary__value">{value.toLocaleString()}</div>
      </div>
    </Style>
  );
};

const Style = styled.div`
  .p-current-salary {
    text-align: center;
  }

  .p-current-salary__value {
    position: relative;
    left: calc(50% - 175px);
    margin-top: 20px;
    padding: 20px 0;
    width: 350px;
    border: 2px solid black;
    font-size: 50px;
    font-weight: 700;
  }

  .p-current-salary__value::after {
    content: "円";
    margin-left: 10px;
    font-size: 24px;
    font-weight: 600;
  }
`;
