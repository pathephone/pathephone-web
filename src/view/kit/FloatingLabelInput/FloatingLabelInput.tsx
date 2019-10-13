import * as React from "react";

import styles from "./FloatingLabelInput.module.css";

type TProps = {
  name: string;
  value: string;
  placeholder: string;
  validationMessage?: string;
  inputTestId?: string;
  validationTestId?: string;
  onChange(event: React.SyntheticEvent<HTMLInputElement>): void;
};

export const FloatingLabelInput = ({
  validationMessage = "",
  inputTestId,
  validationTestId,
  ...nativeProps
}: TProps) => {
  const inputNodeRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const { current: inputNode } = inputNodeRef;
    if (inputNode) {
      inputNode.setCustomValidity(validationMessage);
    }
  }, [validationMessage]);

  return (
    <label className={styles.FloatingLabelInput__Wrapper}>
      <input
        {...nativeProps}
        ref={inputNodeRef}
        className={styles.FloatingLabelInput__Input}
        data-testid={inputTestId}
      />
      <span className={styles.FloatingLabelInput__Placeholder}>
        {nativeProps.placeholder}
      </span>
      <small
        className={styles.FloatingLabelInput__ValidationMessage}
        data-testid={validationTestId}
      >
        {validationMessage}
      </small>
    </label>
  );
};
