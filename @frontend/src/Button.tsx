import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button: React.VFC<ButtonProps> = (props) => {
  return (
    <Style>
      <button className="c-button" onClick={props.onClick}>
        {props.text}
      </button>
    </Style>
  );
};

const Style = styled.div``;
