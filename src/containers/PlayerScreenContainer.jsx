// @flow strict

import * as React from 'react';

type TProps = {|
  children: React.Node;
|}

export const PlayerScreenContainer = ({ children }: TProps) => {

  return (
    <div>
      <header>header</header>
      {children}
    </div>
  )
}
