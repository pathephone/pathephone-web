// @flow strict

import * as React from "react";

type TProps = {|
  children: React.Node
|};

type TWrapperProps = {|
  children: React.Node
|};

type TScreenProps = {|
  children: React.Node,
  width?: string
|};

const Wrapper = ({ children }: TWrapperProps) => {
  const wrapperStyle = {
    padding: "100px",
    boxSizing: "border-box"
  };

  return <div style={wrapperStyle}>{children}</div>;
};

const Screen = ({ width = "auto", children }: TScreenProps) => {
  const wrapperStyle = {
    marginTop: "20px",
    overflow: "auto"
  };

  const slotStyle = {
    border: "1px dashed grey",
    width
  };

  return (
    <div style={wrapperStyle}>
      <div>{width}</div>
      <div style={slotStyle}>{children}</div>
    </div>
  );
};

export const MultiSizeScreen = ({ children }: TProps) => {
  return (
    <Wrapper>
      <Screen>{children}</Screen>
      <Screen width="800px">{children}</Screen>
      <Screen width="400px">{children}</Screen>
      <Screen width="200px">{children}</Screen>
      <Screen width="100px">{children}</Screen>
    </Wrapper>
  );
};
