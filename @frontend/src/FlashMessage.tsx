import React from "react";
import styled from "styled-components";

type FlashMessageProps = {
  text: string;
  type: "positive" | "error";
  isVisible: boolean;
};

export const FlashMessage: React.VFC<FlashMessageProps> = (props) => {
  return props.isVisible ? (
    <Style type={props.type}>
      <div className="c-flash-message">{props.text}</div>
    </Style>
  ) : null;
};

type FlashMessageTypes = {
  type: "positive" | "error";
};

const Style = styled.div<FlashMessageTypes>`
  .c-flash-message {
    color: ${(props) => (props.type === "positive" ? "green" : "red")};
  }
`;
