import React from "react";
import styled from "styled-components";
import { CurrentSalary } from "./CurrentSalary";
import { Form } from "./Form";

export const App: React.FC = () => {
  return (
    <AppStyle>
      <div className="l-current-salary">
        <CurrentSalary />
      </div>
      <div className="l-form">
        <Form />
      </div>
    </AppStyle>
  );
};

const AppStyle = styled.div`
  text-align: center;
  .l-current-salary {
    padding-top: 100px;
  }

  .l-form {
    margin-top: 60px;
  }
`;
