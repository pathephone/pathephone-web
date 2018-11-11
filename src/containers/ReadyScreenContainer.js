import React, { Component } from 'react';

export class ReadyScreenContainer extends Component {
  render() {
    return (
      <ReadyScreen>
        <LeftPanel />
        <Content />
        <RigthPanel />
        <BottomPanel />
      </ReadyScreen>
    );
  }
}
