// @flow strict

import * as React from 'react';

type TProps = {
  label: string;
  name: string;
  value: string;
  onChange(e: SyntheticEvent<HTMLInputElement>): void;
}

export const CustomTextInput = (
  { 
    label,
    name,
    value,
    onChange
  }: TProps
) => (
  <label>
    {label}<br />
    <input 
      type="text"
      name={name}
      placeholder={label}
      value={value} 
      onChange={onChange}
    />
  </label>
)